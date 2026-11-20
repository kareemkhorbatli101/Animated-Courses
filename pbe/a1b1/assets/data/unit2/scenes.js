/* Unit 2 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u2-2-1', {
  set: 'store',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Ammar. Count the cartons on the pallet.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'One, two, three… twelve. Twelve cartons.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twelve. And on the floor?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'On the floor… six.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twelve and six. How many is that?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Eighteen.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Eighteen. Good. Now say it again and point at them.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Twelve here. Six here. Eighteen.' }
  ]
});

PBE1.scene('u2-2-1-pair', {
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
      en: 'Count the cartons.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One, two, three… twelve. Twelve cartons.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twelve. And on the floor?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Six.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How many is that?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Eighteen.' }
  ]
});

PBE1.scene('u2-2-2', {
  set: 'store',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The board says three hundred and forty. Say it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Three hundred and forty.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. Today ninety came in.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Ninety. Nine zero.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nine zero. Not nineteen. Three hundred and forty and ninety?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four hundred and thirty.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Four hundred and thirty. Write it on the board. Big.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four, three, zero.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'And in words under it. Both. Always both.' }
  ]
});

PBE1.scene('u2-2-2-pair', {
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
      en: 'The board says three hundred and forty. Say it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three hundred and forty.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. Today ninety came in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ninety. Nine zero. Not nineteen.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three hundred and forty and ninety?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Four hundred and thirty.' }
  ]
});

PBE1.scene('u2-2-3', {
  set: 'store',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Twenty on shelf two.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twenty what? Cartons? Packets?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Twenty… boxes.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Come and look. This is a packet. Twenty in a packet.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And this big one?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'A carton. Ten packets in a carton. And this on the floor is a pallet.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So twenty packets, not twenty cartons.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twenty packets. Say the word with the number. Always.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Twenty packets on shelf two.' }
  ]
});

PBE1.scene('u2-2-3-pair', {
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
      en: 'Twenty on shelf two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty packets.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many in a packet?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Say the word with the number.' }
  ]
});

PBE1.scene('u2-2-4', {
  set: 'store',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Shelf three?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'There are six cartons on shelf three.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Shelf four?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Shelf four is… empty.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Say it with a number.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'There are none on shelf four. Zero.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. None is a number. I write zero.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if I say nothing about shelf four?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Then I do not know if it is empty or if you did not look.' }
  ]
});

PBE1.scene('u2-2-4-pair', {
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
      en: 'Shelf three?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are six cartons on shelf three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Shelf four?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are none on shelf four. Zero.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Shelf five?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'There is one pallet.' }
  ]
});

PBE1.scene('u2-2-5', {
  set: 'store',
  arr: 1,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Sixty cartons for Homs. On the lorry by eleven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sixteen cartons. By eleven.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'No. Sixty.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sixty or sixteen? Six zero, or one six?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Six zero. Sixty.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Six zero. I write it. Sixty cartons for Homs, on the lorry by eleven.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Correct. Read it back every time. Every time, Ammar.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Every time.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'Sixteen cartons would be nine thousand pounds short.' }
  ]
});

PBE1.scene('u2-2-5-pair', {
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
      en: 'Sixty cartons for Homs. By eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sixteen cartons. By eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. Sixty.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sixty or sixteen? Six zero, or one six?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six zero.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I write it. Sixty cartons for Homs, by eleven.' }
  ]
});

PBE1.scene('u2-2-6', {
  set: 'store',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Abu Yasser. The sheet says twelve on shelf three.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twelve. Yes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'It is not twelve. It is nine. I counted again.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You counted twice?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Twice. Nine both times.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then it is nine. Who wrote twelve?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I do not know. The sheet is from Monday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. You did not say who. You said the number.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I write nine, and today\'s date.' }
  ]
});

PBE1.scene('u2-2-6-pair', {
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
      en: 'The sheet says twelve on shelf three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is not twelve. It is nine. I counted again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You counted twice?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twice. Nine both times.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Who wrote twelve?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I do not know.' }
  ]
});

PBE1.scene('u2-2-7', {
  set: 'store',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Ammar says nine. Samih says twelve. Shelf three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I counted twice. Nine.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I counted twice too. Twelve.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two men, two counts, and both men counted twice.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I counted the cartons on the shelf.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I counted the cartons on the shelf and the three on the floor under it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The three on the floor are not on the shelf.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'They came off the shelf this morning. They go back tonight.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So nobody is wrong. The sheet does not say what to count.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Nine on the shelf. Three on the floor. Twelve in the place.' }
  ]
});

PBE1.scene('u2-2-7-b', {
  set: 'store',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'read', hold: 'sheet' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.62, 0.62],
      pose: 'hold', hold: 'carton' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Seventy cartons for Hama. On the lorry by ten.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Seventy or seventeen? Seven zero, or one seven?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Seven zero. Seventy.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Seven zero. I write it. Seventy cartons for Hama, by ten.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Correct. And shelf four?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'There are none on shelf four. Zero. I looked twice.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Write the zero.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I write the zero, and my name.' }
  ]
});
