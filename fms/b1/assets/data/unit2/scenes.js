/* Unit 2 — the acted scenes. Every line is the book's own, from
   Appendix A (Audio Scripts) or the key's Spoken Sample Answer. Each subtitle is
   LOOKED UP from ar.js through FMS.ar(), so a line and its Arabic cannot drift
   apart; gates/fms_ar.py fails the build on a line whose lookup returns nothing. */
FMS.scene('u2-wb', {
  set: 'office',
  cast: {
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.salma)),
    youssef: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.youssef))
  },
  lines: [
    { who: 'salma', cam: { shot: 'mid' }, en: 'So Youssef, I have just been assigned my first bilateral coordination — '
        + 'the German working group on infrastructure. Where do I even start?',
      ar: FMS.ar('So Youssef, I have just been assigned my first bilateral coordination — '
        + 'the German working group on infrastructure. Where do I even start?') || '' },
    { who: 'youssef', en: 'Start with the agenda. Everything flows from the agenda. Before you touch '
        + 'the room booking or the catering, you need to confirm the agenda with both '
        + 'sides. That is the spine of the meeting.',
      ar: FMS.ar('Start with the agenda. Everything flows from the agenda. Before you touch '
        + 'the room booking or the catering, you need to confirm the agenda with both '
        + 'sides. That is the spine of the meeting.') || '' },
    { who: 'salma', en: 'And if the German side wants to add topics at the last minute?',
      ar: FMS.ar('And if the German side wants to add topics at the last minute?') || '' },
    { who: 'youssef', en: 'Then you go back to the host delegation lead immediately. You cannot '
        + 'accept agenda changes without authorization — each new topic may require a '
        + 'different expert or a different set of briefing papers.',
      ar: FMS.ar('Then you go back to the host delegation lead immediately. You cannot '
        + 'accept agenda changes without authorization — each new topic may require a '
        + 'different expert or a different set of briefing papers.') || '' },
    { who: 'salma', en: 'What about the protocol brief?',
      ar: FMS.ar('What about the protocol brief?') || '' },
    { who: 'youssef', en: 'The protocol brief should include: full names and titles of all '
        + 'participants on both sides, the meeting objective in one paragraph, the '
        + 'key topics in order, any sensitive background the delegation lead needs to '
        + 'know, and the time allocated to each agenda item. Send it to the '
        + 'delegation lead 24 hours before the meeting — never the morning of.',
      ar: FMS.ar('The protocol brief should include: full names and titles of all '
        + 'participants on both sides, the meeting objective in one paragraph, the '
        + 'key topics in order, any sensitive background the delegation lead needs to '
        + 'know, and the time allocated to each agenda item. Send it to the '
        + 'delegation lead 24 hours before the meeting — never the morning of.') || '' },
    { who: 'salma', en: 'And after the meeting?',
      ar: FMS.ar('And after the meeting?') || '' },
    { who: 'youssef', en: 'You write the summary within 24 hours. Minutes fade fast. Include: who was '
        + 'present, what was discussed, what was agreed, what the next steps are and '
        + 'who is responsible for each one. Get it approved before you distribute it.',
      ar: FMS.ar('You write the summary within 24 hours. Minutes fade fast. Include: who was '
        + 'present, what was discussed, what was agreed, what the next steps are and '
        + 'who is responsible for each one. Get it approved before you distribute it.') || '' },
    { who: 'youssef', en: 'One more thing — check visa clearances with Consular Affairs. Karim\'s '
        + 'office confirms clearances for all foreign participants. Do not leave that '
        + 'step until the last day.',
      ar: FMS.ar('One more thing — check visa clearances with Consular Affairs. Karim\'s '
        + 'office confirms clearances for all foreign participants. Do not leave that '
        + 'step until the last day.') || '' }
  ]
});

FMS.scene('u2-3b', {
  set: 'reception',
  cast: {
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.salma)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'salma', cam: { shot: 'mid' }, en: 'Good morning, this is Salma Benali calling from the Moroccan Ministry of '
        + 'Foreign Affairs. I am calling about tomorrow\'s bilateral infrastructure '
        + 'meeting. We have a scheduling issue — the conference room originally '
        + 'booked is unavailable due to an urgent ministerial meeting. The meeting '
        + 'will now take place in Conference Room C on the third floor instead.',
      ar: FMS.ar('Good morning, this is Salma Benali calling from the Moroccan Ministry of '
        + 'Foreign Affairs. I am calling about tomorrow\'s bilateral infrastructure '
        + 'meeting. We have a scheduling issue — the conference room originally '
        + 'booked is unavailable due to an urgent ministerial meeting. The meeting '
        + 'will now take place in Conference Room C on the third floor instead.') || '' },
    { who: 'klaus', en: 'Thank you for letting us know, Ms. Benali. Will the seating arrangement '
        + 'still accommodate twelve participants?',
      ar: FMS.ar('Thank you for letting us know, Ms. Benali. Will the seating arrangement '
        + 'still accommodate twelve participants?') || '' },
    { who: 'salma', en: 'Yes, absolutely. We will have twelve seats ready. I will send you an '
        + 'updated logistics note by midday today.',
      ar: FMS.ar('Yes, absolutely. We will have twelve seats ready. I will send you an '
        + 'updated logistics note by midday today.') || '' },
    { who: 'klaus', en: 'Ms. Benali, this is Thomas Richter from the German Embassy. Dr. Braun\'s '
        + 'flight has been delayed. She will now arrive at two in the afternoon '
        + 'instead of eleven. Can the meeting be moved to three o\'clock?',
      ar: FMS.ar('Ms. Benali, this is Thomas Richter from the German Embassy. Dr. Braun\'s '
        + 'flight has been delayed. She will now arrive at two in the afternoon '
        + 'instead of eleven. Can the meeting be moved to three o\'clock?') || '' },
    { who: 'salma', en: 'Thank you for informing us promptly. I will check with the Director '
        + 'immediately. Can you hold for two minutes?',
      ar: FMS.ar('Thank you for informing us promptly. I will check with the Director '
        + 'immediately. Can you hold for two minutes?') || '' },
    { who: 'klaus', en: 'Of course.',
      ar: FMS.ar('Of course.') || '' },
    { who: 'salma', en: 'Mr. Richter, I can confirm. The bilateral session will begin at three '
        + 'o\'clock. We will send a revised logistics note within the hour.',
      ar: FMS.ar('Mr. Richter, I can confirm. The bilateral session will begin at three '
        + 'o\'clock. We will send a revised logistics note within the hour.') || '' },
    { who: 'klaus', en: 'Ms. Benali, two of our technical specialists speak primarily German. They '
        + 'need German interpretation for the afternoon session. Can you arrange '
        + 'that?',
      ar: FMS.ar('Ms. Benali, two of our technical specialists speak primarily German. They '
        + 'need German interpretation for the afternoon session. Can you arrange '
        + 'that?') || '' },
    { who: 'salma', en: 'Absolutely. We should be able to arrange German interpretation through our '
        + 'Language Services Unit. I need to confirm availability — may I call you '
        + 'back within the hour?',
      ar: FMS.ar('Absolutely. We should be able to arrange German interpretation through our '
        + 'Language Services Unit. I need to confirm availability — may I call you '
        + 'back within the hour?') || '' },
    { who: 'klaus', en: 'Of course. We would appreciate it.',
      ar: FMS.ar('Of course. We would appreciate it.') || '' },
    { who: 'salma', en: 'Note that interpretation must be requested at least four hours before the '
        + 'session. I will send written confirmation before noon.',
      ar: FMS.ar('Note that interpretation must be requested at least four hours before the '
        + 'session. I will send written confirmation before noon.') || '' },
    { who: 'salma', en: 'Mr. Richter, our Security Office has informed us that Dr. Hoffman has not '
        + 'yet completed the clearance process. All foreign nationals must submit the '
        + 'clearance form 48 hours before entry. Can Dr. Hoffman submit the form '
        + 'today by two o\'clock?',
      ar: FMS.ar('Mr. Richter, our Security Office has informed us that Dr. Hoffman has not '
        + 'yet completed the clearance process. All foreign nationals must submit the '
        + 'clearance form 48 hours before entry. Can Dr. Hoffman submit the form '
        + 'today by two o\'clock?') || '' },
    { who: 'klaus', en: 'I will check immediately. If he cannot, can he join by video link?',
      ar: FMS.ar('I will check immediately. If he cannot, can he join by video link?') || '' },
    { who: 'salma', en: 'That is a possible option. I will confirm this with our IT team and let '
        + 'you know within thirty minutes.',
      ar: FMS.ar('That is a possible option. I will confirm this with our IT team and let '
        + 'you know within thirty minutes.') || '' }
  ]
});

FMS.scene('u2-4a', {
  set: 'reception',
  cast: {
    salma: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.salma)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'salma', cam: { shot: 'mid' }, en: 'Good morning. This is Salma Benali calling from the Moroccan Ministry of '
        + 'Foreign Affairs, Protocol Coordination Office. I am calling to finalize '
        + 'the arrangements for Tuesday\'s bilateral session.',
      ar: FMS.ar('Good morning. This is Salma Benali calling from the Moroccan Ministry of '
        + 'Foreign Affairs, Protocol Coordination Office. I am calling to finalize '
        + 'the arrangements for Tuesday\'s bilateral session.') || '' },
    { who: 'klaus', en: 'Good morning, Ms. Benali. We are confirmed for eight participants on our '
        + 'side.',
      ar: FMS.ar('Good morning, Ms. Benali. We are confirmed for eight participants on our '
        + 'side.') || '' },
    { who: 'salma', en: 'Excellent. The session is scheduled for ten o\'clock in Conference Room B, '
        + 'which seats twelve. All foreign participants must submit their security '
        + 'clearance forms by Monday at four o\'clock. Can you confirm that all eight '
        + 'participants will do so?',
      ar: FMS.ar('Excellent. The session is scheduled for ten o\'clock in Conference Room B, '
        + 'which seats twelve. All foreign participants must submit their security '
        + 'clearance forms by Monday at four o\'clock. Can you confirm that all eight '
        + 'participants will do so?') || '' },
    { who: 'klaus', en: 'Yes, we can do that. We also have two participants who speak primarily '
        + 'German. They will need German interpretation for the technical session.',
      ar: FMS.ar('Yes, we can do that. We also have two participants who speak primarily '
        + 'German. They will need German interpretation for the technical session.') || '' },
    { who: 'salma', en: 'I understand. I should be able to arrange German interpretation through '
        + 'our Language Services Unit, but I need to confirm availability. Can I call '
        + 'you back by midday today to confirm?',
      ar: FMS.ar('I understand. I should be able to arrange German interpretation through '
        + 'our Language Services Unit, but I need to confirm availability. Can I call '
        + 'you back by midday today to confirm?') || '' },
    { who: 'klaus', en: 'Of course. One more thing — may we arrive at nine-thirty for a brief '
        + 'pre-meeting review?',
      ar: FMS.ar('Of course. One more thing — may we arrive at nine-thirty for a brief '
        + 'pre-meeting review?') || '' },
    { who: 'salma', en: 'Absolutely. The executive lounge will be available from nine o\'clock. I '
        + 'will include this in the logistics note I send you today.',
      ar: FMS.ar('Absolutely. The executive lounge will be available from nine o\'clock. I '
        + 'will include this in the logistics note I send you today.') || '' }
  ]
});

FMS.scene('u2-4b', {
  set: 'forum',
  cast: {
    ambassador: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.ambassador)),
    youssef: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.youssef)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'ambassador', cam: { shot: 'mid' }, en: 'The German delegation expects a clean agenda and a clear position on '
        + 'infrastructure priorities. Brief me after the session.',
      ar: FMS.ar('The German delegation expects a clean agenda and a clear position on '
        + 'infrastructure priorities. Brief me after the session.') || '' },
    { who: 'youssef', en: 'Understood, Ambassador.',
      ar: FMS.ar('Understood, Ambassador.') || '' },
    { who: 'youssef', en: 'Ladies and gentlemen, on behalf of the Moroccan Ministry of Foreign '
        + 'Affairs, I welcome the German delegation to today\'s Morocco–Germany '
        + 'Infrastructure Cooperation Working Group. We are pleased to welcome Dr. '
        + 'Braun and her colleagues. I propose we proceed according to the agreed '
        + 'agenda, beginning with a review of the joint infrastructure assessment.',
      ar: FMS.ar('Ladies and gentlemen, on behalf of the Moroccan Ministry of Foreign '
        + 'Affairs, I welcome the German delegation to today\'s Morocco–Germany '
        + 'Infrastructure Cooperation Working Group. We are pleased to welcome Dr. '
        + 'Braun and her colleagues. I propose we proceed according to the agreed '
        + 'agenda, beginning with a review of the joint infrastructure assessment.') || '' },
    { who: 'klaus', en: 'Thank you, Director. The German delegation is pleased to be here and '
        + 'grateful for the ministry\'s careful preparation. Germany fully supports '
        + 'the cooperative agenda we have agreed and looks forward to the technical '
        + 'discussions today.',
      ar: FMS.ar('Thank you, Director. The German delegation is pleased to be here and '
        + 'grateful for the ministry\'s careful preparation. Germany fully supports '
        + 'the cooperative agenda we have agreed and looks forward to the technical '
        + 'discussions today.') || '' }
  ]
});

FMS.scene('u2-7c', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Ladies and gentlemen, on behalf of the Moroccan Ministry of Foreign '
        + 'Affairs, I welcome the German delegation to today\'s working group '
        + 'session.',
      ar: FMS.ar('Ladies and gentlemen, on behalf of the Moroccan Ministry of Foreign '
        + 'Affairs, I welcome the German delegation to today\'s working group '
        + 'session.') || '' },
    { who: 'klaus', en: 'Thank you, Director. The German delegation is pleased to be here and '
        + 'grateful for the ministry\'s careful preparation.',
      ar: FMS.ar('Thank you, Director. The German delegation is pleased to be here and '
        + 'grateful for the ministry\'s careful preparation.') || '' },
    { who: 'linh', en: 'I propose we proceed according to the agreed agenda. Shall we begin?',
      ar: FMS.ar('I propose we proceed according to the agreed agenda. Shall we begin?') || '' },
    { who: 'klaus', en: 'Certainly. The German side is ready to proceed.',
      ar: FMS.ar('Certainly. The German side is ready to proceed.') || '' }
  ]
});
