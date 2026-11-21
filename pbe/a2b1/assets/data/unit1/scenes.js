/* Unit 1 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u1-1-1', {
  set: 'reception',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Good morning. I\'m Nour Mansour. I\'m the new assistant.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good morning, Nour. Welcome to Sham Trading. I\'m Khaled Ayoub, '
            + 'the office manager.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Pleased to meet you, Mr Ayoub.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Pleased to meet you too. The office is on the second floor. Are '
            + 'you from Damascus?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes, I am. I\'m from Mezzeh — I live ten minutes from here.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That\'s very good. This is your desk, next to Nadia. She\'s our accountant.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. Is the warehouse in this building?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'It\'s behind the building. Abu Yasser is the supervisor there — '
            + 'you\'ll meet him today.' }
  ]
});

PBE3.scene('u1-1-1-pair', {
  set: 'reception',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. I\'m Hala Mourad. I\'m the new customer service officer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good morning, Hala. Welcome to Sham Trading. I\'m Nour Mansour, '
            + 'the assistant.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Pleased to meet you, Nour.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Pleased to meet you too. Are you from Damascus?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No, I\'m not. I\'m from Latakia.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'This is your desk, next to the window.' }
  ]
});

PBE3.scene('u1-1-2', {
  set: 'reception',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, this is Nadia. Nadia, this is Nour, our new assistant.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Hello, Nour. Pleased to meet you. Your desk is next to mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Pleased to meet you too, Nadia. What do you do here?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'I\'m the accountant. I look after the invoices and the payments.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And who is at that desk?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That\'s Bassel\'s desk. He\'s in sales. He isn\'t here today — '
            + 'he\'s in Homs with a customer.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You\'ll meet him tomorrow. His customers are all in Homs and Aleppo.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. And the warehouse supervisor — what\'s his name?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Abu Yasser. Everybody calls him Abu Yasser. Ask him anything — he '
            + 'knows it all.' }
  ]
});

PBE3.scene('u1-1-2-pair', {
  set: 'reception',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Nour, this is Abu Yasser. Abu Yasser, this is Nour, our new assistant.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Hello, Nour. Pleased to meet you.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'Pleased to meet you too. What do you do here?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'m the warehouse supervisor. I look after the stock and the deliveries.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'And who is at that desk?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That\'s Bassel\'s desk. He\'s in sales.' }
  ]
});

PBE3.scene('u1-1-3', {
  set: 'reception',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning. Nour speaking.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Good morning. My name is Fouad Tarabishi. I have a shop in Souq '
            + 'al-Hamidiyeh.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good morning, Mr Tarabishi. How do you spell your surname, please?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'T-A-R-A-B-I-S-H-I.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. And what\'s the name of the shop?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Al-Noor Stationery. That\'s A-L, then N-O-O-R.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Al-Noor Stationery. And what\'s your mobile number?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'It\'s 0944 318 260.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me repeat that: zero nine four four, three one eight, two six '
            + 'zero. Is that right?' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Yes, that\'s right.' }
  ]
});

PBE3.scene('u1-1-3-pair', {
  set: 'reception',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning. Nour speaking.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good morning. My name is Dima Shamsi. I have a packaging company in Aleppo.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How do you spell your surname, please?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'S-H-A-M-S-I.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. And what\'s your mobile number?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It\'s 0955 612 043.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Let me repeat that: zero nine five five, six one two, zero four '
            + 'three. Is that right?' }
  ]
});

PBE3.scene('u1-1-4', {
  set: 'reception',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I started my new job today. I work for Sham Trading now.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Sham Trading — that\'s the company in Mezzeh? What have they got there?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We\'ve got an office on the second floor, and we\'ve got a '
            + 'warehouse behind the building.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'How many staff have you got?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nineteen. It\'s a small company. We haven\'t got a big head office '
            + 'like the banks.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Have you got a branch in another city?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes, we have. We\'ve got a small branch in Homs — two people and a '
            + 'store room.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what does the company sell?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'We import paper, packaging and office things, and we sell them to shops.' }
  ]
});

PBE3.scene('u1-1-4-pair', {
  set: 'reception',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Who do you work for?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I work for Al-Noor Stationery.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What have you got there?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We\'ve got a shop in Souq al-Hamidiyeh and a small store room behind it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How many staff have you got?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Four. It\'s a small company.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Have you got a branch in another city?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'No, we haven\'t. We\'ve only got the one shop.' }
  ]
});

PBE3.scene('u1-1-5', {
  set: 'reception',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'write', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'So, this is the warehouse. Come in, come in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s bigger than I thought. What do you do here all day?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I look after the stock. First thing every morning, I count what '
            + 'came in yesterday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then I check the orders for today. I like checking the orders — '
            + 'it\'s quiet in the morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Do you like working here?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Thirty years, my daughter. I love working with the boxes and the '
            + 'lorries. I don\'t like writing reports.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody likes writing reports.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'You\'re right. One rule here: check it twice. Count it, write it, '
            + 'then count it again.' }
  ]
});

PBE3.scene('u1-1-5-pair', {
  set: 'reception',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What do you do here?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I look after the invoices and the payments.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What do you do first every morning?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'First thing, I open the post and look for cheques.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Do you like working here?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Yes. I like working with numbers. But I don\'t like telephoning '
            + 'people who pay late.' }
  ]
});

PBE3.scene('u1-1-6', {
  set: 'reception',
  arr: 2,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'Hello, Sham Trading? This is Dima Shamsi, from Aleppo.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good morning, Ms Shamsi. Sorry — the line isn\'t very good. Could '
            + 'you speak a little louder, please?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Of course. Is that better? I\'m calling about order four-oh-eight-seven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sorry, could you repeat the number, please?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Four, zero, eight, seven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four zero eight seven. Thank you. Go ahead.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'We\'re sending forty boxes on Tuesday, not thirty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sorry — forty or fourteen?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Forty. Four-zero.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Forty boxes, Tuesday. Let me write that down. Thank you, Ms Shamsi.' }
  ]
});

PBE3.scene('u1-1-6-pair', {
  set: 'reception',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: '(quietly) Order three-oh-one-five, fifteen boxes, Wednesday, Mr Tarabishi.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sorry, could you repeat the order number, please?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three, zero, one, five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sorry — fifteen or fifty?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fifteen. One-five.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Let me write that down. Order 3015, fifteen boxes, Wednesday, Mr '
            + 'Tarabishi. Thank you.' }
  ]
});

PBE3.scene('u1-1-7', {
  set: 'reception',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, there\'s a new paper on the board. My English is from '
            + 'nineteen eighty-five. What does it say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s from Mr Ayoub. It\'s about the deliveries from Aleppo.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good news or bad news?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not bad. It says the Aleppo lorry comes on Tuesday now, not on Monday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Tuesday. From which week?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'From next week. And it says we have to count the boxes at the '
            + 'gate, not in the store.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'At the gate. That\'s better — I asked for that in the winter. Anything else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One more thing. It says: any problem, call extension 201 the same day.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Two-oh-one. Good. Thank you, my daughter. Now I know what my own board says.' }
  ]
});

PBE3.scene('u1-1-7-b', {
  set: 'reception',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'write', hold: 'book' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning. Nour speaking.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good morning. This is Rasha Hamdan, from Hamdan Printing in Jaramana.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good morning. How do you spell Hamdan, please?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'H-A-M-D-A-N. My number is 0988 450 176.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. And how can I help?' },
    { who: 'caller', cam: { shot: 'close' },
      en: 'I\'d like your price list for paper, please.' }
  ]
});
