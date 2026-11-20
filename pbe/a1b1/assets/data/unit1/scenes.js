/* Unit 1 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u1-1-1', {
  set: 'gate',
  arr: 0,
  cast: {
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_raed', cam: { shot: 'wide' },
      en: 'Good morning. Your name, please.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Good morning. My name is Ammar Zreik.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Ammar. And your job?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I am the new storeman.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'The new storeman. Welcome. I am Abu Raed. I am the gate.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'It is ten to seven. You are early. That is good.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Yes. My first day.' }
  ]
});

PBE1.scene('u1-1-1-pair', {
  set: 'gate',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. Your name, please.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good morning. My name is Fadi Saeed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And your job?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am the driver.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Welcome. I am Abu Raed.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Thank you.' }
  ]
});

PBE1.scene('u1-1-2', {
  set: 'gate',
  arr: 1,
  cast: {
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_raed', cam: { shot: 'wide' },
      en: 'Zreik. How do you spell it?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Z, R, E, I, K.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Again, please. Slowly.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Z. R. E. I. K. Five letters.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Five. Good. I write it in Arabic in my book. I do not write English.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Nine years?' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Nine years. Every name. Every day.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And nobody says it is wrong?' },
    { who: 'abu_raed', cam: { shot: 'close' },
      en: 'Nobody reads it. Only me.' }
  ]
});

PBE1.scene('u1-1-2-pair', {
  set: 'gate',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Qassar. How do you spell it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Q, A, S, S, A, R.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Again, please. Slowly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Q. A. S. S. A. R. Six letters.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is it a double S?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'A double S. Yes.' }
  ]
});

PBE1.scene('u1-1-3', {
  set: 'gate',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'This is the store. And this is the shift list.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Where is my name?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Look. Eleven names. That is you — number seven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Zreik. Yes. That is me.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You are on the morning shift. Seven to four.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Seven to four. Every day?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Sunday to Thursday. Read the list every morning. It changes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'It changes?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Every week. Read it. Do not ask me.' }
  ]
});

PBE1.scene('u1-1-3-pair', {
  set: 'gate',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This is the store. And this is the shift list.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where is my name?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Look. Eleven names. That is you — number seven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes. That is me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You are on the morning shift.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Seven to four.' }
  ]
});

PBE1.scene('u1-1-4', {
  set: 'gate',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'That man by the lorry is Fadi. He is the driver.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Fadi. And the man at the counter?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is Majd. He is on the counter. He is good with the customers.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the woman on the stairs?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'She is Nour. She is in the office. She is new too — today is her first day.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Her first day too?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Yes. She is upstairs, you are down here.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And Abu Raed is the gate.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Abu Raed is the gate. He is always the gate.' }
  ]
});

PBE1.scene('u1-1-4-pair', {
  set: 'gate',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'That man is Fadi. He is the driver.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the woman?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She is Nour. She is in the office.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is she new?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes, she is.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And Majd?' }
  ]
});

PBE1.scene('u1-1-5', {
  set: 'gate',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Four o\'clock. Good. Go home.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Goodbye, Abu Yasser.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Goodbye. See you tomorrow morning. Seven o\'clock.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Seven o\'clock. Goodbye.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Ammar! The book.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sorry?' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Sign out. Your name, and the time. Every day, in and out.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Ah. Sorry. Four o\'clock.' },
    { who: 'abu_raed', cam: { shot: 'close' },
      en: 'Four o\'clock. Good night, Ammar.' }
  ]
});

PBE1.scene('u1-1-5-pair', {
  set: 'gate',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Four o\'clock. Good. Go home.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Goodbye, Abu Yasser.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Goodbye. See you tomorrow morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Seven o\'clock. Goodbye.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ammar! The book.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Sorry. Four o\'clock.' }
  ]
});

PBE1.scene('u1-1-6', {
  set: 'gate',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Ammar — fourteen boxes to row three, shelf two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sorry?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Fourteen boxes. Row three, shelf two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Again, please. Slowly.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Four — teen. One four. Fourteen. Not forty.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Fourteen. Row three, shelf two. Can you write it down?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Here. Fourteen. Row 3. Shelf 2.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you. Sorry.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Do not say sorry. Ask. Always ask. Ask me ten times.' }
  ]
});

PBE1.scene('u1-1-6-pair', {
  set: 'gate',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Fourteen boxes to row three, shelf two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sorry?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fourteen boxes. Row three, shelf two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Again, please. Slowly.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fourteen. Not forty.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Can you write it down?' }
  ]
});

PBE1.scene('u1-1-7', {
  set: 'gate',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Raed, I need the names from Tuesday. The office needs them.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'They are here. Tuesday. Eleven names.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(reading) I cannot read this. It is in Arabic letters.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'It is in my letters. Nine years. Every name. Every day. Not one day missing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. The book is perfect. But the office cannot read it.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Then come to the gate and I will read it to you.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I can read the English. I can write it next to his.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Next to mine. Not instead of mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Next to yours. Both.' },
    { who: 'abu_raed', cam: { shot: 'close' },
      en: 'Then it is good. Nine years is nine years.' }
  ]
});

PBE1.scene('u1-1-7-b', {
  set: 'gate',
  arr: 0,
  cast: {
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'write', hold: 'book' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_raed', cam: { shot: 'wide' },
      en: 'Good morning. Your name, please.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Good morning. Majd Bitar. B, I, T, A, R. Five letters.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Majd Bitar. And your job?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'I am on the counter.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'The counter. Time in — seven twenty.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Seven twenty. And out at four?' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'Out at four. You are on the morning shift this week.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'The morning shift. Thank you, Abu Raed.' }
  ]
});
