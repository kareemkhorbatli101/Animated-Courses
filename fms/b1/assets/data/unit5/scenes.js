/* Unit 5 — the acted scenes. Every line is the book's own, from
   Appendix A (Audio Scripts) or the key's Spoken Sample Answer. Each subtitle is
   LOOKED UP from ar.js through FMS.ar(), so a line and its Arabic cannot drift
   apart; gates/fms_ar.py fails the build on a line whose lookup returns nothing. */
FMS.scene('u5-wb', {
  set: 'office',
  cast: {
    ambassador: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.ambassador)),
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.dawit)),
    selamawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.selamawit))
  },
  lines: [
    { who: 'ambassador', cam: { shot: 'mid' }, en: 'Every conversation today is a signal. We are open, stable, and serious '
        + 'about development. Keep your messages consistent and your tone '
        + 'professional.',
      ar: FMS.ar('Every conversation today is a signal. We are open, stable, and serious '
        + 'about development. Keep your messages consistent and your tone '
        + 'professional.') || '' },
    { who: 'dawit', en: 'We will, Ambassador.',
      ar: FMS.ar('We will, Ambassador.') || '' },
    { who: 'dawit', en: 'Selamawit, the German delegation arrives Thursday. Klaus Richter is '
        + 'leading it — he visited the ministry last year just to explore. Now he is '
        + 'coming back with a full team.',
      ar: FMS.ar('Selamawit, the German delegation arrives Thursday. Klaus Richter is '
        + 'leading it — he visited the ministry last year just to explore. Now he is '
        + 'coming back with a full team.') || '' },
    { who: 'selamawit', en: 'So he is serious this time. What sectors is he looking at?',
      ar: FMS.ar('So he is serious this time. What sectors is he looking at?') || '' },
    { who: 'dawit', en: 'Infrastructure and energy. His company builds roads and '
        + 'energy-distribution systems. If the legal framework is clear, they will '
        + 'commit to a feasibility study immediately.',
      ar: FMS.ar('Infrastructure and energy. His company builds roads and '
        + 'energy-distribution systems. If the legal framework is clear, they will '
        + 'commit to a feasibility study immediately.') || '' },
    { who: 'selamawit', en: 'What does he need from us before that?',
      ar: FMS.ar('What does he need from us before that?') || '' },
    { who: 'dawit', en: 'A clean overview of the investment law, the free zones, and the tax '
        + 'incentives. And a meeting with the Investment Promotion Agency.',
      ar: FMS.ar('A clean overview of the investment law, the free zones, and the tax '
        + 'incentives. And a meeting with the Investment Promotion Agency.') || '' },
    { who: 'selamawit', en: 'What about the press?',
      ar: FMS.ar('What about the press?') || '' },
    { who: 'dawit', en: 'Let us keep it low profile for now. If the feasibility study goes well, we '
        + 'would announce a joint venture later. For now, we just need the meeting to '
        + 'go smoothly.',
      ar: FMS.ar('Let us keep it low profile for now. If the feasibility study goes well, we '
        + 'would announce a joint venture later. For now, we just need the meeting to '
        + 'go smoothly.') || '' },
    { who: 'selamawit', en: 'Understood. I will have everything ready by Wednesday.',
      ar: FMS.ar('Understood. I will have everything ready by Wednesday.') || '' },
    { who: 'dawit', en: 'Dawit, before you go — I wanted to let you both know. I have been assigned '
        + 'to our Consulate in Vienna. I leave next month.',
      ar: FMS.ar('Dawit, before you go — I wanted to let you both know. I have been assigned '
        + 'to our Consulate in Vienna. I leave next month.') || '' },
    { who: 'dawit', en: 'Vienna. That is a significant posting, Yonas. Consular work is very '
        + 'different from what we do here.',
      ar: FMS.ar('Vienna. That is a significant posting, Yonas. Consular work is very '
        + 'different from what we do here.') || '' },
    { who: 'selamawit', en: 'We will need your reports. Addis needs to understand what our citizens '
        + 'abroad are dealing with.',
      ar: FMS.ar('We will need your reports. Addis needs to understand what our citizens '
        + 'abroad are dealing with.') || '' },
    { who: 'dawit', en: 'I will make sure you are kept informed. Good luck with the Klaus Richter '
        + 'meeting.',
      ar: FMS.ar('I will make sure you are kept informed. Good luck with the Klaus Richter '
        + 'meeting.') || '' }
  ]
});

FMS.scene('u5-2a', {
  set: 'reception',
  cast: {
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.dawit)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'dawit', cam: { shot: 'mid' }, en: 'Thank you for coming back, Klaus. The fact that you are here with a full '
        + 'team tells us a great deal.',
      ar: FMS.ar('Thank you for coming back, Klaus. The fact that you are here with a full '
        + 'team tells us a great deal.') || '' },
    { who: 'klaus', en: 'We are serious, Dawit. If the legal framework provides the protection we '
        + 'need, we will sign a letter of intent by the end of the quarter.',
      ar: FMS.ar('We are serious, Dawit. If the legal framework provides the protection we '
        + 'need, we will sign a letter of intent by the end of the quarter.') || '' },
    { who: 'dawit', en: 'I understand. And if we restructured the incentive package for '
        + 'infrastructure companies, we would attract significantly more interest '
        + 'from your sector across Europe.',
      ar: FMS.ar('I understand. And if we restructured the incentive package for '
        + 'infrastructure companies, we would attract significantly more interest '
        + 'from your sector across Europe.') || '' },
    { who: 'klaus', en: 'That would help. Tell me — if we commit to a feasibility study, how long '
        + 'will the approval process take?',
      ar: FMS.ar('That would help. Tell me — if we commit to a feasibility study, how long '
        + 'will the approval process take?') || '' },
    { who: 'dawit', en: 'If you submit your application through the Investment Promotion Agency, we '
        + 'will fast-track the review. We are targeting a 30-day turnaround.',
      ar: FMS.ar('If you submit your application through the Investment Promotion Agency, we '
        + 'will fast-track the review. We are targeting a 30-day turnaround.') || '' },
    { who: 'klaus', en: 'Good. And hypothetically — if you set up a fully dedicated investment '
        + 'processing office, your average lead time would drop by half.',
      ar: FMS.ar('Good. And hypothetically — if you set up a fully dedicated investment '
        + 'processing office, your average lead time would drop by half.') || '' },
    { who: 'dawit', en: 'We know. That is something we are actively working on.',
      ar: FMS.ar('We know. That is something we are actively working on.') || '' }
  ]
});

FMS.scene('u5-3b', {
  set: 'reception',
  cast: {
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.dawit)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus)),
    aigerim: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.aigerim)),
    selamawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.selamawit))
  },
  lines: [
    { who: 'dawit', cam: { shot: 'mid' }, en: 'Welcome, Klaus, and welcome to the whole delegation. We are genuinely glad '
        + 'to have you back. Please take a seat — I will walk you through where we '
        + 'are and what we can offer.',
      ar: FMS.ar('Welcome, Klaus, and welcome to the whole delegation. We are genuinely glad '
        + 'to have you back. Please take a seat — I will walk you through where we '
        + 'are and what we can offer.') || '' },
    { who: 'klaus', en: 'Thank you, Dawit. My board sent this team because they want to move from '
        + 'exploration to commitment. What we need to know is simple: if the legal '
        + 'conditions are solid, what happens next?',
      ar: FMS.ar('Thank you, Dawit. My board sent this team because they want to move from '
        + 'exploration to commitment. What we need to know is simple: if the legal '
        + 'conditions are solid, what happens next?') || '' },
    { who: 'dawit', en: 'If your feasibility study confirms the technical and financial viability, '
        + 'we will assign a dedicated case officer from the Investment Promotion '
        + 'Agency to your project. The approval process will be fast-tracked. We are '
        + 'targeting thirty days.',
      ar: FMS.ar('If your feasibility study confirms the technical and financial viability, '
        + 'we will assign a dedicated case officer from the Investment Promotion '
        + 'Agency to your project. The approval process will be fast-tracked. We are '
        + 'targeting thirty days.') || '' },
    { who: 'klaus', en: 'Thirty days. That is workable. What about profit repatriation?',
      ar: FMS.ar('Thirty days. That is workable. What about profit repatriation?') || '' },
    { who: 'dawit', en: 'National investment law guarantees full profit repatriation rights for '
        + 'foreign companies operating under a registered joint venture agreement. If '
        + 'any issue arises, you have full legal recourse under the same framework.',
      ar: FMS.ar('National investment law guarantees full profit repatriation rights for '
        + 'foreign companies operating under a registered joint venture agreement. If '
        + 'any issue arises, you have full legal recourse under the same framework.') || '' },
    { who: 'klaus', en: 'Good. Let us proceed.',
      ar: FMS.ar('Good. Let us proceed.') || '' },
    { who: 'aigerim', en: 'I need to be direct. My principals want to know: if the political '
        + 'situation changes again, what protection do we have?',
      ar: FMS.ar('I need to be direct. My principals want to know: if the political '
        + 'situation changes again, what protection do we have?') || '' },
    { who: 'selamawit', en: 'That is exactly the right question to ask, and I respect your directness. '
        + 'If you sign a registered investment agreement with us, you are protected '
        + 'under national investment law, which includes an international arbitration '
        + 'clause. If something unexpected were to happen that affected the business '
        + 'environment, that clause gives you full legal recourse through '
        + 'international courts.',
      ar: FMS.ar('That is exactly the right question to ask, and I respect your directness. '
        + 'If you sign a registered investment agreement with us, you are protected '
        + 'under national investment law, which includes an international arbitration '
        + 'clause. If something unexpected were to happen that affected the business '
        + 'environment, that clause gives you full legal recourse through '
        + 'international courts.') || '' },
    { who: 'aigerim', en: 'And has that framework been tested?',
      ar: FMS.ar('And has that framework been tested?') || '' },
    { who: 'selamawit', en: 'It has not been challenged yet, because we are in the early stages of this '
        + 'engagement. But I want to be clear — if we did not have full confidence in '
        + 'this framework ourselves, we would not be inviting serious investors to '
        + 'commit to it.',
      ar: FMS.ar('It has not been challenged yet, because we are in the early stages of this '
        + 'engagement. But I want to be clear — if we did not have full confidence in '
        + 'this framework ourselves, we would not be inviting serious investors to '
        + 'commit to it.') || '' },
    { who: 'dawit', en: 'Klaus, I wanted to follow up on our meeting. You mentioned your board '
        + 'needs the legal summary in writing.',
      ar: FMS.ar('Klaus, I wanted to follow up on our meeting. You mentioned your board '
        + 'needs the legal summary in writing.') || '' },
    { who: 'klaus', en: 'Yes. If I have it in writing before Thursday, I can present it to the '
        + 'board on Friday and we will have a decision by Monday.',
      ar: FMS.ar('Yes. If I have it in writing before Thursday, I can present it to the '
        + 'board on Friday and we will have a decision by Monday.') || '' },
    { who: 'dawit', en: 'I will send it to you tomorrow morning. It will cover: investment law, '
        + 'free zone regulations, profit repatriation, and the arbitration clause. If '
        + 'you have any questions after reading it, call me directly.',
      ar: FMS.ar('I will send it to you tomorrow morning. It will cover: investment law, '
        + 'free zone regulations, profit repatriation, and the arbitration clause. If '
        + 'you have any questions after reading it, call me directly.') || '' },
    { who: 'klaus', en: 'Perfect. And if the board approves, can we meet with the Investment '
        + 'Promotion Agency the same week?',
      ar: FMS.ar('Perfect. And if the board approves, can we meet with the Investment '
        + 'Promotion Agency the same week?') || '' },
    { who: 'dawit', en: 'Absolutely. If you confirm approval on Monday, I will arrange the Agency '
        + 'meeting for Tuesday or Wednesday. We are ready to move quickly.',
      ar: FMS.ar('Absolutely. If you confirm approval on Monday, I will arrange the Agency '
        + 'meeting for Tuesday or Wednesday. We are ready to move quickly.') || '' },
    { who: 'dawit', en: 'Today marks an important step in our economic opening. We are committed to '
        + 'providing full legal protection for every legitimate foreign investment in '
        + 'this country. If you invest here, you will find a partner that respects '
        + 'its commitments.',
      ar: FMS.ar('Today marks an important step in our economic opening. We are committed to '
        + 'providing full legal protection for every legitimate foreign investment in '
        + 'this country. If you invest here, you will find a partner that respects '
        + 'its commitments.') || '' },
    { who: 'klaus', en: 'And for our part — Richter Infrastructure GmbH is committed to bringing '
        + 'our full technical expertise to this country\'s development. If the '
        + 'feasibility study confirms what we believe, we will be proud to build '
        + 'something lasting here together.',
      ar: FMS.ar('And for our part — Richter Infrastructure GmbH is committed to bringing '
        + 'our full technical expertise to this country\'s development. If the '
        + 'feasibility study confirms what we believe, we will be proud to build '
        + 'something lasting here together.') || '' },
    { who: 'dawit', en: 'We are ready. We are open. And if you are looking for your next major '
        + 'opportunity, you will find it here.',
      ar: FMS.ar('We are ready. We are open. And if you are looking for your next major '
        + 'opportunity, you will find it here.') || '' }
  ]
});

FMS.scene('u5-4a', {
  set: 'reception',
  cast: {
    official: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.official)),
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.salma))
  },
  lines: [
    { who: 'official', cam: { shot: 'mid' }, en: 'Thank you for visiting the Ministry today, Ms. Al-Sayed. I would like to '
        + 'begin with a brief overview of our agricultural investment framework. The '
        + 'country has approximately 5.2 million hectares of arable land, with the '
        + 'Awash Valley and the Rift Valley lakes region being our highest-priority '
        + 'investment zones.',
      ar: FMS.ar('Thank you for visiting the Ministry today, Ms. Al-Sayed. I would like to '
        + 'begin with a brief overview of our agricultural investment framework. The '
        + 'country has approximately 5.2 million hectares of arable land, with the '
        + 'Awash Valley and the Rift Valley lakes region being our highest-priority '
        + 'investment zones.') || '' },
    { who: 'salma', en: 'We appreciate that. Our main concern is long-term stability of land '
        + 'rights. If the political situation changed, what would happen to our '
        + 'investment?',
      ar: FMS.ar('We appreciate that. Our main concern is long-term stability of land '
        + 'rights. If the political situation changed, what would happen to our '
        + 'investment?') || '' },
    { who: 'official', en: 'I understand the concern completely. If you sign a registered joint '
        + 'venture agreement, you are protected by national investment law and an '
        + 'international arbitration clause. If you would like to see the full legal '
        + 'framework in writing before your next meeting, I can have that ready by '
        + 'tomorrow morning.',
      ar: FMS.ar('I understand the concern completely. If you sign a registered joint '
        + 'venture agreement, you are protected by national investment law and an '
        + 'international arbitration clause. If you would like to see the full legal '
        + 'framework in writing before your next meeting, I can have that ready by '
        + 'tomorrow morning.') || '' }
  ]
});

FMS.scene('u5-4b', {
  set: 'forum',
  cast: {
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.dawit)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus)),
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.salma)),
    selamawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.selamawit))
  },
  lines: [
    { who: 'dawit', cam: { shot: 'mid' }, en: 'Good morning. My name is Dawit Bekele, Economic Affairs Specialist at the '
        + 'Ministry of Foreign Affairs. I will be moderating today\'s panel. Our '
        + 'priority sectors are infrastructure, energy, agriculture, and '
        + 'telecommunications. If any participant has a question about our regulatory '
        + 'framework, I will address it after the panel.',
      ar: FMS.ar('Good morning. My name is Dawit Bekele, Economic Affairs Specialist at the '
        + 'Ministry of Foreign Affairs. I will be moderating today\'s panel. Our '
        + 'priority sectors are infrastructure, energy, agriculture, and '
        + 'telecommunications. If any participant has a question about our regulatory '
        + 'framework, I will address it after the panel.') || '' },
    { who: 'klaus', en: 'Good morning. I am Klaus Richter, Managing Director of Richter '
        + 'Infrastructure GmbH from Germany. My company has 20 years of experience in '
        + 'road construction and energy distribution. We are here because we believe '
        + 'this country\'s infrastructure development is one of the most important '
        + 'opportunities in the region. If the legal framework delivers the '
        + 'protection described, we will begin a feasibility study within 90 days.',
      ar: FMS.ar('Good morning. I am Klaus Richter, Managing Director of Richter '
        + 'Infrastructure GmbH from Germany. My company has 20 years of experience in '
        + 'road construction and energy distribution. We are here because we believe '
        + 'this country\'s infrastructure development is one of the most important '
        + 'opportunities in the region. If the legal framework delivers the '
        + 'protection described, we will begin a feasibility study within 90 days.') || '' },
    { who: 'salma', en: 'Good morning. I am Fatima Al-Sayed from the Gulf Development Fund. Our '
        + 'fund has a long-term focus on food security. This country\'s agricultural '
        + 'sector is directly aligned with our strategic objectives. If the land '
        + 'rights and water usage framework can be confirmed in writing, we would '
        + 'discuss a joint venture at a meaningful scale.',
      ar: FMS.ar('Good morning. I am Fatima Al-Sayed from the Gulf Development Fund. Our '
        + 'fund has a long-term focus on food security. This country\'s agricultural '
        + 'sector is directly aligned with our strategic objectives. If the land '
        + 'rights and water usage framework can be confirmed in writing, we would '
        + 'discuss a joint venture at a meaningful scale.') || '' },
    { who: 'selamawit', en: 'Good morning. I am Selamawit Tesfaye, Investment Facilitation Officer at '
        + 'the Ministry of Foreign Affairs. I manage the official programme for '
        + 'today\'s Forum. If you have a bilateral meeting this afternoon, please '
        + 'check your delegate folder for the room and time. If you need to arrange '
        + 'any additional meetings, please find me at the reception desk.',
      ar: FMS.ar('Good morning. I am Selamawit Tesfaye, Investment Facilitation Officer at '
        + 'the Ministry of Foreign Affairs. I manage the official programme for '
        + 'today\'s Forum. If you have a bilateral meeting this afternoon, please '
        + 'check your delegate folder for the room and time. If you need to arrange '
        + 'any additional meetings, please find me at the reception desk.') || '' }
  ]
});

FMS.scene('u5-7c', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning, Mr. Richter. Welcome back to the Ministry.',
      ar: FMS.ar('Good morning, Mr. Richter. Welcome back to the Ministry.') || '' },
    { who: 'klaus', en: 'Thank you. We are here because we are serious. If the legal framework is '
        + 'solid, we are ready to move.',
      ar: FMS.ar('Thank you. We are here because we are serious. If the legal framework is '
        + 'solid, we are ready to move.') || '' },
    { who: 'linh', en: 'I understand. If you submit your application through the Investment '
        + 'Promotion Agency, we will fast-track the review. We are targeting thirty '
        + 'days.',
      ar: FMS.ar('I understand. If you submit your application through the Investment '
        + 'Promotion Agency, we will fast-track the review. We are targeting thirty '
        + 'days.') || '' },
    { who: 'klaus', en: 'Thirty days. That is workable. If we commit to the feasibility study, what '
        + 'happens next?',
      ar: FMS.ar('Thirty days. That is workable. If we commit to the feasibility study, what '
        + 'happens next?') || '' },
    { who: 'linh', en: 'If the feasibility study confirms viability, we will assign a dedicated '
        + 'case officer and move to agreement stage. We are ready to move quickly.',
      ar: FMS.ar('If the feasibility study confirms viability, we will assign a dedicated '
        + 'case officer and move to agreement stage. We are ready to move quickly.') || '' }
  ]
});

FMS.scene('u5-8c', {
  set: 'reception',
  cast: {
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.klaus)),
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.dawit))
  },
  lines: [
    { who: 'klaus', cam: { shot: 'mid' }, en: 'Dawit, I read the document. My board has three questions. First: what is '
        + 'the exact timeline if we submit the application today?',
      ar: FMS.ar('Dawit, I read the document. My board has three questions. First: what is '
        + 'the exact timeline if we submit the application today?') || '' },
    { who: 'dawit', en: 'If you submit today, the Investment Promotion Agency will begin the review '
        + 'immediately. We are targeting a 30-day fast-track process. If there are no '
        + 'outstanding documentation requirements, you will receive a formal decision '
        + 'within that window.',
      ar: FMS.ar('If you submit today, the Investment Promotion Agency will begin the review '
        + 'immediately. We are targeting a 30-day fast-track process. If there are no '
        + 'outstanding documentation requirements, you will receive a formal decision '
        + 'within that window.') || '' },
    { who: 'klaus', en: 'Good. Second question: the arbitration clause — is it enforceable through '
        + 'international courts?',
      ar: FMS.ar('Good. Second question: the arbitration clause — is it enforceable through '
        + 'international courts?') || '' },
    { who: 'dawit', en: 'Yes. Our investment law includes a mandatory international arbitration '
        + 'clause that references the ICSID framework. If any dispute arises, both '
        + 'parties have full recourse through international arbitration. I can send '
        + 'you the exact text this afternoon.',
      ar: FMS.ar('Yes. Our investment law includes a mandatory international arbitration '
        + 'clause that references the ICSID framework. If any dispute arises, both '
        + 'parties have full recourse through international arbitration. I can send '
        + 'you the exact text this afternoon.') || '' },
    { who: 'klaus', en: 'And third: if we sign a letter of intent this month, can we begin the site '
        + 'visit for the feasibility study by December?',
      ar: FMS.ar('And third: if we sign a letter of intent this month, can we begin the site '
        + 'visit for the feasibility study by December?') || '' },
    { who: 'dawit', en: 'If the letter of intent is signed by the end of October, yes — we will '
        + 'coordinate the site access permits for the eastern corridor zone and have '
        + 'everything ready for a December site visit.',
      ar: FMS.ar('If the letter of intent is signed by the end of October, yes — we will '
        + 'coordinate the site access permits for the eastern corridor zone and have '
        + 'everything ready for a December site visit.') || '' }
  ]
});

FMS.scene('u5-8d', {
  set: 'meeting',
  cast: {
    dawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.dawit)),
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.salma))
  },
  lines: [
    { who: 'dawit', cam: { shot: 'mid' }, en: 'Ms. Al-Sayed, it is a great honour to welcome you to the Ministry of '
        + 'Foreign Affairs. Our country and the Gulf have always been close, and we '
        + 'are deeply grateful that the Gulf Development Fund is here today to '
        + 'explore what we can build together.',
      ar: FMS.ar('Ms. Al-Sayed, it is a great honour to welcome you to the Ministry of '
        + 'Foreign Affairs. Our country and the Gulf have always been close, and we '
        + 'are deeply grateful that the Gulf Development Fund is here today to '
        + 'explore what we can build together.') || '' },
    { who: 'salma', en: 'Thank you, Mr. Bekele. This country holds a special place for us. We are '
        + 'here because we believe in its future. We are interested in agricultural '
        + 'investment — but before we discuss specifics, we need to feel confident in '
        + 'the relationship.',
      ar: FMS.ar('Thank you, Mr. Bekele. This country holds a special place for us. We are '
        + 'here because we believe in its future. We are interested in agricultural '
        + 'investment — but before we discuss specifics, we need to feel confident in '
        + 'the relationship.') || '' },
    { who: 'dawit', en: 'I understand completely, and I want you to know that this Ministry treats '
        + 'every partner with the highest respect and full transparency. If you would '
        + 'like, I can begin by giving you an overview of our agricultural sector '
        + 'without any pressure — simply to share the picture. Then, if you would '
        + 'like to explore specific opportunities, we can take that step together at '
        + 'whatever pace feels right.',
      ar: FMS.ar('I understand completely, and I want you to know that this Ministry treats '
        + 'every partner with the highest respect and full transparency. If you would '
        + 'like, I can begin by giving you an overview of our agricultural sector '
        + 'without any pressure — simply to share the picture. Then, if you would '
        + 'like to explore specific opportunities, we can take that step together at '
        + 'whatever pace feels right.') || '' },
    { who: 'salma', en: 'That is exactly the approach we appreciate. Please go ahead.',
      ar: FMS.ar('That is exactly the approach we appreciate. Please go ahead.') || '' }
  ]
});
