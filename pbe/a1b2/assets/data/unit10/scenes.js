/* Unit 10 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u10-10-1', {
  set: 'safety',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Six signs in this yard. Walk round with me and read them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'NO SMOKING. That one I know.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Next.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'KEEP OUT. DANGER. And… FLAMMABLE? I do not know that one.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Flammable. It burns. That is the paint store.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And HARD HATS MUST BE WORN. And… FIRE EXIT.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Six. Now. Which one is the important one?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'DANGER?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'FIRE EXIT. The other five tell you not to do something. That one '
            + 'tells you where to go.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I had not thought of it like that.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Five signs stop you. One saves you. Learn that one first.' }
  ]
});

PBE2.scene('u10-10-1-pair', {
  set: 'safety',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This one. What does it mean?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'FLAMMABLE. It means it burns.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what kind is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It stops you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which of the six is the important one?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'FIRE EXIT. Five stop you. One saves you.' }
  ]
});

PBE2.scene('u10-10-2', {
  set: 'safety',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'point' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'The paper on the wall has nine rules.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nine rules. I enforce three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You must not stand on a carton. You must not walk behind a '
            + 'reversing lorry. You must not open the paint store with a '
            + 'cigarette.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the other six?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The other six are good advice. Nobody has died of the other six.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Is that not dangerous? Having nine and meaning three?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is. If I shout about all nine, nobody believes me about the three.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So you choose.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'I choose three and I never once let one go. In nine years nobody '
            + 'has stood on a carton twice.' }
  ]
});

PBE2.scene('u10-10-2-pair', {
  set: 'safety',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The paper on the wall has nine rules.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nine rules. I enforce three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You must not stand on a carton. You must not walk behind a '
            + 'reversing lorry. You must not open the paint store with a '
            + 'cigarette.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the others?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The others are good advice. Nobody has died of the others.' }
  ]
});

PBE2.scene('u10-10-3', {
  set: 'safety',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.46, bottom: 46, at: [0.28, 0.62],
      pose: 'point' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' },
    abu_raed: { rig: 'm-50s-b', name: 'Abu Raed', voice: 'en-US-RogerNeural', shirt: '#4a5a46', shirt2: '#3a4737',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'STOP! STOP!' },
    { who: 'driver', cam: { shot: 'mid' },
      en: '(brakes) What? What?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Abu Raed is behind you. He was picking up a nail.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'I did not see him. There is nothing in the mirror.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'He was low down. On the ground.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'I heard him shout and I did not move. I thought: a man is '
            + 'shouting, I will stay still.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'If you had moved I would have hit you.' },
    { who: 'abu_raed', cam: { shot: 'mid' },
      en: 'I know. Fifty years at a gate. When a man shouts, you stop. You do '
            + 'not look round.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I did not know the English for there is a man behind you. So I shouted STOP.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'STOP was the right word. You had one second. One word is what one '
            + 'second buys.' }
  ]
});

PBE2.scene('u10-10-3-pair', {
  set: 'safety',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'STOP! STOP!' },
    { who: 'b', cam: { shot: 'mid' },
      en: '(brakes) What? What?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Abu Raed is behind you. He was picking up a nail.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did not see him. There is nothing in the mirror.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He was low down. On the ground.' },
    { who: 'c', cam: { shot: 'close' },
      en: 'I heard him shout and I did not move.' }
  ]
});

PBE2.scene('u10-10-4', {
  set: 'safety',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The floor by the door is wet. I nearly went over.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Majd said be careful to everybody this morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He says be careful every morning. About everything.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So nobody hears it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody hears it. I did not know he meant the floor.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I will say it differently. The floor by the door is wet. Walk '
            + 'round by the shelf.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That I would hear.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Because it says where, and it says what to do instead.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say it to everybody who comes in, for an hour.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'For an hour. And I put a chair on the wet part so they can see it '
            + 'as well as hear it.' }
  ]
});

PBE2.scene('u10-10-4-pair', {
  set: 'safety',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The floor by the door is wet. I nearly went over.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Majd said be careful to everybody this morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He says be careful every morning. About everything.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So nobody hears it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I will say it differently. The floor by the door is wet. Walk '
            + 'round by the shelf.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That I would hear. Because it says where and what to do.' }
  ]
});

PBE2.scene('u10-10-5', {
  set: 'safety',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'point' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Samih. The light over the loading door.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Three nights. I wrote it on the sheet three times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You wrote it on the sheet. Did you TELL anybody?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The sheet is for telling.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The sheet is for the record. A person is for telling.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I told the wall three times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You told the wall three times. This morning you told Abu Yasser, '
            + 'and by ten the electrician was booked.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'So I should have told him on Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On Tuesday. And written it. Both.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Both. Unit six.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Unit six. The slip AND the telling. Three units ago and you had it '
            + 'in your hand.' }
  ]
});

PBE2.scene('u10-10-5-pair', {
  set: 'safety',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Samih. The light over the loading door.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three nights. I wrote it on the sheet three times.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You wrote it on the sheet. Did you TELL anybody?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The sheet is for telling.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The sheet is for the record. A person is for telling.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I told the wall three times.' }
  ]
});

PBE2.scene('u10-10-6', {
  set: 'safety',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The paint pallet. Move it to row four.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I cannot do it alone. I need help.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'All right. Ammar is back at eleven.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Then I will do it at eleven.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. Last Thursday you moved one alone.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I did.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Because you asked me to move it and you were busy and I did not '
            + 'want to say no.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You did not say no. You said you need help. They are different sentences.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'They felt the same last Thursday.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'They always do. And in nine years I have never once been angry '
            + 'with a man who said the second one.' }
  ]
});

PBE2.scene('u10-10-6-pair', {
  set: 'safety',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The paint pallet. Move it to row four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I cannot do it alone. I need help.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All right. Ammar is back at eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I will do it at eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. Last Thursday you moved one alone.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I did.' }
  ]
});

PBE2.scene('u10-10-7', {
  set: 'safety',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.46, bottom: 46, at: [0.28, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.46, bottom: 46, at: [0.63, 0.62],
      pose: 'read' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' },
    fouad: { rig: 'm-30s-a', name: 'Fouad', voice: 'en-US-SteffanNeural', shirt: '#3f5d8a', shirt2: '#324a6e',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Rule two. Nobody walks behind a reversing lorry. Everybody knows it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Abu Yasser. You walked behind one on Tuesday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '(pause) I did.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And Fouad does it every delivery. And Samih.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'Round the front is nine seconds. Twenty times a day is three minutes.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'And the drivers know us. They look.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Abu Raed was on the ground and the driver did not look.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'Abu Raed was LOW. That is different.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Is it? Or is it the only time somebody happened to be watching?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '(pause) I have enforced that rule on four men and broken it myself '
            + 'a hundred times.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'So either the rule is wrong or we are. One of the two.' }
  ]
});

PBE2.scene('u10-10-7-b', {
  set: 'safety',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Nour. There is a step at the back door and it is broken.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Since January. Five weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Has anybody gone over?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The bread man nearly went over with a full tray on Tuesday. I '
            + 'shouted STOP and he stopped on the top step.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who have you told?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I told you now, and I wrote it on the sheet in January. Both, this time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the trays?' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'I cannot carry the big trays down that step alone. I need help. I '
            + 'will do it when Samih comes at seven.' }
  ]
});
