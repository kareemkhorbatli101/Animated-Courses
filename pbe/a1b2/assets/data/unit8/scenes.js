/* Unit 8 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u8-8-1', {
  set: 'store',
  arr: 0,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Majd. Can I have the tape, please?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Which tape? There are two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The wide one. The brown one.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'The wide brown one. Here you are.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'What is it for?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Two cartons came crushed. I am taping them before they go on the shelf.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Then take the whole roll. Bring it back at four.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'The whole roll, back at four. Thank you.' }
  ]
});

PBE2.scene('u8-8-1-pair', {
  set: 'store',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Majd. Can I have the tape, please?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which tape? There are two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The wide one. The brown one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The wide brown one. Here you are.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'What is it for?' }
  ]
});

PBE2.scene('u8-8-2', {
  set: 'store',
  arr: 1,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'The wide brown tape. Here you are.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'And the cutter. You will want it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Here, I have two hands. Thank you for the cutter too.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Bring them both back at four.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: '(at four o\'clock) Majd. The tape and the cutter. Here you are.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Thank you. Is the roll finished?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Finished. Here is the empty one, so you know to order more.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'Nobody brings the empty one back. Nobody. Thank you.' }
  ]
});

PBE2.scene('u8-8-2-pair', {
  set: 'store',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The wide brown tape. Here you are.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the cutter. You will want it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you for the cutter too.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Bring them both back at four.' },
    { who: 'b', cam: { shot: 'close' },
      en: '(later) The tape and the cutter. Here you are.' }
  ]
});

PBE2.scene('u8-8-3', {
  set: 'store',
  arr: 2,
  cast: {
    hani: { rig: 'm-50s-a', name: 'Hani', voice: 'en-US-BrianNeural', shirt: '#7a5c3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hani', cam: { shot: 'wide' },
      en: 'Tape.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: '(looking for it) … Which tape?' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'Tape. The tape.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: '(still looking) … Here.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Majd. Can I have the wide brown tape, please?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Here you are.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'You gave him his in four seconds. You took two minutes with me.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'He told me which one and he said please. You said tape.' },
    { who: 'hani', cam: { shot: 'mid' },
      en: 'It is the same tape.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'It is the same tape. It is not the same two minutes.' }
  ]
});

PBE2.scene('u8-8-3-pair', {
  set: 'store',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Tape.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '(looking) … Which tape?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Tape. The tape.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'Majd. Can I have the wide brown tape, please?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Here you are.' },
    { who: 'c', cam: { shot: 'close' },
      en: 'Thank you.' }
  ]
});

PBE2.scene('u8-8-4', {
  set: 'store',
  arr: 0,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Twenty of the small white bags.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Sorry, we have not got any. They are out of stock.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'None at all?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'None at all. The lorry comes on Thursday.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thursday is three days.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'I have the small brown ones. Nineteen of those, today.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Brown, not white.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Brown, not white. Or I keep twenty white ones for you on Thursday '
            + 'and you come at eight.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Keep them. I come Thursday at eight.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'Twenty white, Thursday, eight o\'clock. Your name, please.' }
  ]
});

PBE2.scene('u8-8-4-pair', {
  set: 'store',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Twenty of the small white bags.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sorry, we have not got any. They are out of stock.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None at all?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'None at all. The lorry comes on Thursday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thursday is three days.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I have the brown ones. Or I keep twenty for you on Thursday.' }
  ]
});

PBE2.scene('u8-8-5', {
  set: 'store',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    fouad: { rig: 'm-30s-a', name: 'Fouad', voice: 'en-US-SteffanNeural', shirt: '#3f5d8a', shirt2: '#324a6e',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Fouad. Do you want a hand?' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'With the pallet? No. I have the truck.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'All right.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'But the door. Hold the door open. That is the hard part.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The door.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'Twenty years and the door is still the hard part. The pallet is easy.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I would not have thought of the door.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'Nobody thinks of the door. Everybody offers to push the pallet.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So I should ask what the hard part is.' },
    { who: 'fouad', cam: { shot: 'close' },
      en: 'Ask what the hard part is. Then you help with the right thing.' }
  ]
});

PBE2.scene('u8-8-5-pair', {
  set: 'store',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Fouad. Do you want a hand?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With the pallet? No. I have the truck.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'But the door. Hold the door open. That is the hard part.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The door.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody thinks of the door. Everybody offers to push the pallet.' }
  ]
});

PBE2.scene('u8-8-6', {
  set: 'store',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Samih. Thank you for the ladder this morning.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The ladder?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'You brought it in from the yard at half past seven. I had shelf four to do.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I was coming in anyway.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'You were coming in anyway and you carried a ladder. I would have '
            + 'put them on shelf three and moved them twice.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Nobody says what for.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'What?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'People say thank you. Nobody says what for. Two years here and '
            + 'that is the second time.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The second time in two years?' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'The second time. The first was Abu Yasser, about the Monday count.' }
  ]
});

PBE2.scene('u8-8-6-pair', {
  set: 'store',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samih. Thank you for the ladder this morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The ladder?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You brought it in at half past seven. I had shelf four to do.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I was coming in anyway.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You were coming in anyway and you carried a ladder.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody says what for.' }
  ]
});

PBE2.scene('u8-8-7', {
  set: 'store',
  arr: 0,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Abu Fouad. Eleven years he has come here. Twice a week.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'He has never said please. Not once. Eleven years.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Never?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'He says bags. He says flour. Then he waits.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He is the third biggest account in the book.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'He is the third biggest account in the book. He pays on the day, '
            + 'every time, in cash.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So he is a good customer who is rude.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He is not rude. He came from a village where nobody says it. He '
            + 'has told me so.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'And the two new girls will not serve him. They send him to me.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'So the best customer in the shop is served by one man, and that '
            + 'man is on holiday in August.' }
  ]
});

PBE2.scene('u8-8-7-b', {
  set: 'store',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Majd. Can I have the long ladder, please?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'The long one or the short one?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The long one. Shelf four in the back store.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Shelf four. Take it. Back by five?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Back by five. Thank you. And twenty of the small white bags.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Sorry, we have not got any. They are out of stock until Thursday.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'None at all?' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'None. I have the small brown ones — nineteen of those today.' }
  ]
});
