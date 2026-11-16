/* Unit 1 — the acted scenes. Every line is the book's own, from
   Appendix A (Audio Scripts) or the key's Spoken Sample Answer. Each subtitle is
   LOOKED UP from ar.js through FMS.ar(), so a line and its Arabic cannot drift
   apart; gates/fms_ar.py fails the build on a line whose lookup returns nothing. */
FMS.scene('u1-wb', {
  set: 'office',
  cast: {
    mai: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.mai)),
    huy: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.huy))
  },
  lines: [
    { who: 'mai', cam: { shot: 'mid' }, en: 'Okay, let us go through the five visitor types. Let us start with '
        + 'diplomats and ambassadors.',
      ar: FMS.ar('Okay, let us go through the five visitor types. Let us start with '
        + 'diplomats and ambassadors.') || '' },
    { who: 'huy', en: 'That is the Protocol Department. When a new ambassador arrives, the most '
        + 'important event is presenting credentials to the minister. Everything '
        + 'about that visit — the ceremony, the timing, the seating — is managed by '
        + 'the protocol team.',
      ar: FMS.ar('That is the Protocol Department. When a new ambassador arrives, the most '
        + 'important event is presenting credentials to the minister. Everything '
        + 'about that visit — the ceremony, the timing, the seating — is managed by '
        + 'the protocol team.') || '' },
    { who: 'mai', en: 'What about journalists?',
      ar: FMS.ar('What about journalists?') || '' },
    { who: 'huy', en: 'The Press and Information Office. Journalists need official press '
        + 'accreditation before they can cover ministry events. They also need clear '
        + 'access to the spokesperson for official quotes and statements.',
      ar: FMS.ar('The Press and Information Office. Journalists need official press '
        + 'accreditation before they can cover ministry events. They also need clear '
        + 'access to the spokesperson for official quotes and statements.') || '' },
    { who: 'mai', en: 'And investors?',
      ar: FMS.ar('And investors?') || '' },
    { who: 'huy', en: 'Economic Affairs handles them. Investors coming to the country now are '
        + 'usually interested in priority sectors — infrastructure, energy, '
        + 'agriculture. The ministry helps connect them with the right government '
        + 'bodies and provides the regulatory overview.',
      ar: FMS.ar('Economic Affairs handles them. Investors coming to the country now are '
        + 'usually interested in priority sectors — infrastructure, energy, '
        + 'agriculture. The ministry helps connect them with the right government '
        + 'bodies and provides the regulatory overview.') || '' },
    { who: 'mai', en: 'UN officials and NGO workers?',
      ar: FMS.ar('UN officials and NGO workers?') || '' },
    { who: 'huy', en: 'They usually meet with Political Affairs or the Humanitarian Liaison team. '
        + 'They coordinate their field programs with the government, share updates on '
        + 'their operations, and work with the relevant administrative offices to '
        + 'ensure safe and effective access to areas where their programs operate.',
      ar: FMS.ar('They usually meet with Political Affairs or the Humanitarian Liaison team. '
        + 'They coordinate their field programs with the government, share updates on '
        + 'their operations, and work with the relevant administrative offices to '
        + 'ensure safe and effective access to areas where their programs operate.') || '' },
    { who: 'mai', en: 'And citizens living abroad?',
      ar: FMS.ar('And citizens living abroad?') || '' },
    { who: 'huy', en: 'Consular Section. They may need a new passport, a document certified, or '
        + 'guidance on their legal status if they want to return and resettle or '
        + 'invest. This section deals with very personal situations and needs a '
        + 'particularly professional and empathetic approach.',
      ar: FMS.ar('Consular Section. They may need a new passport, a document certified, or '
        + 'guidance on their legal status if they want to return and resettle or '
        + 'invest. This section deals with very personal situations and needs a '
        + 'particularly professional and empathetic approach.') || '' }
  ]
});

FMS.scene('u1-2a', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning. Welcome to the Ministry of Foreign Affairs. My name is Linh. '
        + 'I work at the reception desk.',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs. My name is Linh. '
        + 'I work at the reception desk.') || '' },
    { who: 'klaus', en: 'Good morning, Linh. I am Klaus Richter. I am meeting Mr. Tran from the '
        + 'Economic Affairs Office at ten o\'clock.',
      ar: FMS.ar('Good morning, Linh. I am Klaus Richter. I am meeting Mr. Tran from the '
        + 'Economic Affairs Office at ten o\'clock.') || '' },
    { who: 'linh', en: 'Of course, Mr. Richter. Mr. Tran is currently handling another visitor. He '
        + 'usually finishes his morning meetings by ten past ten. May I offer you a '
        + 'seat?',
      ar: FMS.ar('Of course, Mr. Richter. Mr. Tran is currently handling another visitor. He '
        + 'usually finishes his morning meetings by ten past ten. May I offer you a '
        + 'seat?') || '' },
    { who: 'klaus', en: 'Thank you. I am exploring investment opportunities in Vietnamese '
        + 'infrastructure this week.',
      ar: FMS.ar('Thank you. I am exploring investment opportunities in Vietnamese '
        + 'infrastructure this week.') || '' }
  ]
});

FMS.scene('u1-3b', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina)),
    visitor: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.visitor)),
    daniyar: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.daniyar))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning. Welcome to the Ministry of Foreign Affairs. How may I help '
        + 'you?',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs. How may I help '
        + 'you?') || '' },
    { who: 'valentina', en: 'Good morning. My name is Laura Fischer. I am the Economic Adviser at the '
        + 'German Embassy in Hanoi. I have a scheduled meeting with the Economic '
        + 'Affairs Office at nine-thirty.',
      ar: FMS.ar('Good morning. My name is Laura Fischer. I am the Economic Adviser at the '
        + 'German Embassy in Hanoi. I have a scheduled meeting with the Economic '
        + 'Affairs Office at nine-thirty.') || '' },
    { who: 'linh', en: 'Thank you, Ms. Fischer. May I see your identification, please? Thank you. '
        + 'Please take a seat. I will notify Mr. Tran\'s office immediately.',
      ar: FMS.ar('Thank you, Ms. Fischer. May I see your identification, please? Thank you. '
        + 'Please take a seat. I will notify Mr. Tran\'s office immediately.') || '' },
    { who: 'linh', en: 'Good morning. Welcome to the Ministry of Foreign Affairs.',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs.') || '' },
    { who: 'visitor', en: 'Good morning. I am Omar Diallo, Field Coordinator for UNICEF. I am here to '
        + 'meet the Humanitarian Liaison Officer regarding the regional humanitarian '
        + 'coordination program.',
      ar: FMS.ar('Good morning. I am Omar Diallo, Field Coordinator for UNICEF. I am here to '
        + 'meet the Humanitarian Liaison Officer regarding the regional humanitarian '
        + 'coordination program.') || '' },
    { who: 'linh', en: 'Of course, Mr. Diallo. Thank you for visiting. May I have your UNICEF '
        + 'identification card, please? I will inform the officer right away and '
        + 'arrange an escort to take you up.',
      ar: FMS.ar('Of course, Mr. Diallo. Thank you for visiting. May I have your UNICEF '
        + 'identification card, please? I will inform the officer right away and '
        + 'arrange an escort to take you up.') || '' },
    { who: 'linh', en: 'Good afternoon. Welcome. How can I help you?',
      ar: FMS.ar('Good afternoon. Welcome. How can I help you?') || '' },
    { who: 'daniyar', en: 'Hello. My name is Somsak Chaiyaporn. I am from Thailand. I am a '
        + 'businessman. I want to speak to someone about investment in Viet Nam.',
      ar: FMS.ar('Hello. My name is Somsak Chaiyaporn. I am from Thailand. I am a '
        + 'businessman. I want to speak to someone about investment in Viet Nam.') || '' },
    { who: 'linh', en: 'Welcome, Mr. Chaiyaporn. For investment inquiries, our Economic Affairs '
        + 'Office is the right department. Do you have a prior appointment, or is '
        + 'this your first visit?',
      ar: FMS.ar('Welcome, Mr. Chaiyaporn. For investment inquiries, our Economic Affairs '
        + 'Office is the right department. Do you have a prior appointment, or is '
        + 'this your first visit?') || '' },
    { who: 'daniyar', en: 'This is my first visit. I did not know I needed an appointment.',
      ar: FMS.ar('This is my first visit. I did not know I needed an appointment.') || '' },
    { who: 'linh', en: 'No problem at all. Please complete this visitor inquiry form and I will '
        + 'arrange a brief introductory meeting with the Economic Affairs duty '
        + 'officer.',
      ar: FMS.ar('No problem at all. Please complete this visitor inquiry form and I will '
        + 'arrange a brief introductory meeting with the Economic Affairs duty '
        + 'officer.') || '' },
    { who: 'linh', en: 'Good afternoon. May I help you?',
      ar: FMS.ar('Good afternoon. May I help you?') || '' },
    { who: 'valentina', en: 'Hello. Elena Popescu, Romanian Public Television. I am here for press '
        + 'accreditation. I will be covering the regional investment forum next week.',
      ar: FMS.ar('Hello. Elena Popescu, Romanian Public Television. I am here for press '
        + 'accreditation. I will be covering the regional investment forum next week.') || '' },
    { who: 'linh', en: 'Welcome, Ms. Popescu. The Press and Information Office handles all media '
        + 'accreditation. Please come with me — I will take you directly to the press '
        + 'desk on the second floor.',
      ar: FMS.ar('Welcome, Ms. Popescu. The Press and Information Office handles all media '
        + 'accreditation. Please come with me — I will take you directly to the press '
        + 'desk on the second floor.') || '' }
  ]
});

FMS.scene('u1-4a', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning. Welcome to the Ministry of Foreign Affairs. My name is Mai. '
        + 'How may I help you?',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs. My name is Mai. '
        + 'How may I help you?') || '' },
    { who: 'valentina', en: 'Good morning. I am Sophie Martin, Cultural Affairs Officer at the French '
        + 'Embassy. I have an appointment with the Cultural Relations Division at '
        + 'eleven o\'clock.',
      ar: FMS.ar('Good morning. I am Sophie Martin, Cultural Affairs Officer at the French '
        + 'Embassy. I have an appointment with the Cultural Relations Division at '
        + 'eleven o\'clock.') || '' },
    { who: 'linh', en: 'Thank you, Ms. Martin. May I see your identification, please? Thank you. '
        + 'Could you sign the visitor register here? I will call the Cultural '
        + 'Relations Division right away. Please take a seat. Someone will be with '
        + 'you in just a moment.',
      ar: FMS.ar('Thank you, Ms. Martin. May I see your identification, please? Thank you. '
        + 'Could you sign the visitor register here? I will call the Cultural '
        + 'Relations Division right away. Please take a seat. Someone will be with '
        + 'you in just a moment.') || '' }
  ]
});

FMS.scene('u1-4b', {
  set: 'forum',
  cast: {
    huy: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.huy)),
    mai: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.mai)),
    selamawit: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.66, 0.52] }; }(FMS.art.cast.selamawit)),
    official: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.84, 0.52] }; }(FMS.art.cast.official))
  },
  lines: [
    { who: 'huy', cam: { shot: 'mid' }, en: 'Good evening. My name is Le Quang Huy. I am an Economic Affairs Specialist '
        + 'at the Vietnamese Ministry of Foreign Affairs. I work in trade diplomacy. '
        + 'Right now, I am coordinating the national investment facilitation '
        + 'framework. It is a pleasure to meet you.',
      ar: FMS.ar('Good evening. My name is Le Quang Huy. I am an Economic Affairs Specialist '
        + 'at the Vietnamese Ministry of Foreign Affairs. I work in trade diplomacy. '
        + 'Right now, I am coordinating the national investment facilitation '
        + 'framework. It is a pleasure to meet you.') || '' },
    { who: 'mai', en: 'Good evening. I am Pham Thi Mai, Protocol Officer at the Ministry of '
        + 'Foreign Affairs. My role at this Forum is to make sure all events and '
        + 'schedules run smoothly. Right now, I am helping delegates with the '
        + 'official program. It is a pleasure to meet you.',
      ar: FMS.ar('Good evening. I am Pham Thi Mai, Protocol Officer at the Ministry of '
        + 'Foreign Affairs. My role at this Forum is to make sure all events and '
        + 'schedules run smoothly. Right now, I am helping delegates with the '
        + 'official program. It is a pleasure to meet you.') || '' },
    { who: 'selamawit', en: 'Good evening. I am Tran Thu Ha, Press Attaché at the Ministry of Foreign '
        + 'Affairs. I work in media and communications. Right now, I am managing '
        + 'press operations for the Forum this week. It is a pleasure to meet you.',
      ar: FMS.ar('Good evening. I am Tran Thu Ha, Press Attaché at the Ministry of Foreign '
        + 'Affairs. I work in media and communications. Right now, I am managing '
        + 'press operations for the Forum this week. It is a pleasure to meet you.') || '' },
    { who: 'official', en: 'Good evening. I am Nguyen Van Duc from the Consular Affairs Section of the '
        + 'Ministry of Foreign Affairs. My team processes diplomatic visas and travel '
        + 'documents. Right now, I am managing documentation for all Forum '
        + 'participants. I hope your entry to Viet Nam was smooth.',
      ar: FMS.ar('Good evening. I am Nguyen Van Duc from the Consular Affairs Section of the '
        + 'Ministry of Foreign Affairs. My team processes diplomatic visas and travel '
        + 'documents. Right now, I am managing documentation for all Forum '
        + 'participants. I hope your entry to Viet Nam was smooth.') || '' }
  ]
});

FMS.scene('u1-7c', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    klaus: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.klaus))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning. Welcome to the Ministry of Foreign Affairs. My name is Linh.',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs. My name is Linh.') || '' },
    { who: 'klaus', en: 'Good morning. I am Klaus Richter, from the German Embassy.',
      ar: FMS.ar('Good morning. I am Klaus Richter, from the German Embassy.') || '' },
    { who: 'linh', en: 'Pleased to meet you, Mr. Richter. May I see your identification?',
      ar: FMS.ar('Pleased to meet you, Mr. Richter. May I see your identification?') || '' },
    { who: 'klaus', en: 'Of course. Here you are.',
      ar: FMS.ar('Of course. Here you are.') || '' },
    { who: 'linh', en: 'Thank you. Please take a seat. I will inform the Economic Affairs Office '
        + 'right away.',
      ar: FMS.ar('Thank you. Please take a seat. I will inform the Economic Affairs Office '
        + 'right away.') || '' }
  ]
});

FMS.scene('u1-8c', {
  set: 'reception',
  cast: {
    linh: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.linh)),
    valentina: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.valentina))
  },
  lines: [
    { who: 'linh', cam: { shot: 'mid' }, en: 'Good morning. Welcome to the Ministry of Foreign Affairs. My name is Mai.',
      ar: FMS.ar('Good morning. Welcome to the Ministry of Foreign Affairs. My name is Mai.') || '' },
    { who: 'valentina', en: 'Good morning. I am Sophie Martin, Cultural Attaché at the French Embassy. '
        + 'I have an appointment at eleven with the Cultural Relations Division.',
      ar: FMS.ar('Good morning. I am Sophie Martin, Cultural Attaché at the French Embassy. '
        + 'I have an appointment at eleven with the Cultural Relations Division.') || '' },
    { who: 'linh', en: 'Of course, Ms. Martin. Welcome. May I see your identification, please? '
        + 'Thank you. Please sign the visitor register here. I will call the Cultural '
        + 'Relations Division right away. Please take a seat. Someone will come to '
        + 'escort you in just a moment.',
      ar: FMS.ar('Of course, Ms. Martin. Welcome. May I see your identification, please? '
        + 'Thank you. Please sign the visitor register here. I will call the Cultural '
        + 'Relations Division right away. Please take a seat. Someone will come to '
        + 'escort you in just a moment.') || '' }
  ]
});

FMS.scene('u1-8d', {
  set: 'meeting',
  cast: {
    mai: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.22, 0.52] }; }(FMS.art.cast.mai)),
    official: (function (g) { return { rig: g.rig, name: g.name, voice: g.voice, pitch: g.pitch, shirt: g.shirt, shirt2: g.shirt2, full: true, scale: 0.72, bottom: 42, at: [0.44, 0.52] }; }(FMS.art.cast.official))
  },
  lines: [
    { who: 'mai', cam: { shot: 'mid' }, en: 'Your Excellency, it is a great honor to welcome you to the Ministry of '
        + 'Foreign Affairs of Viet Nam. On behalf of His Excellency the Foreign '
        + 'Minister, I extend our warmest greetings and our deep gratitude for your '
        + 'visit to Hanoi.',
      ar: FMS.ar('Your Excellency, it is a great honor to welcome you to the Ministry of '
        + 'Foreign Affairs of Viet Nam. On behalf of His Excellency the Foreign '
        + 'Minister, I extend our warmest greetings and our deep gratitude for your '
        + 'visit to Hanoi.') || '' },
    { who: 'official', en: 'Thank you. The pleasure is truly mine. Viet Nam is always close to our '
        + 'hearts.',
      ar: FMS.ar('Thank you. The pleasure is truly mine. Viet Nam is always close to our '
        + 'hearts.') || '' },
    { who: 'mai', en: 'We are moved by your kind words, Your Excellency. Please allow me to '
        + 'escort you to the minister\'s reception room. May I offer you some Arabic '
        + 'coffee or tea while we await His Excellency the Minister?',
      ar: FMS.ar('We are moved by your kind words, Your Excellency. Please allow me to '
        + 'escort you to the minister\'s reception room. May I offer you some Arabic '
        + 'coffee or tea while we await His Excellency the Minister?') || '' }
  ]
});
