/* Unit 3 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u3-3-1', {
  set: 'yard',
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'You work Sunday to Thursday. Five days.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Sunday, Monday, Tuesday, Wednesday, Thursday. Five.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Friday is your day off. Saturday too, this month.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the big delivery?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'On Monday. Always on Monday. Twelve pallets.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'On Monday. I will be here early.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. On Monday everybody is here early.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And on Thursday?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'On Thursday we count. Every Thursday, the whole store.' }
  ]
});

PBE1.scene('u3-3-1-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You work Sunday to Thursday. Five days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sunday to Thursday. Five days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Friday is your day off.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the big delivery?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On Monday. Always on Monday.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'On Monday. I will be here early.' }
  ]
});

PBE1.scene('u3-3-2', {
  set: 'yard',
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The lorry comes at quarter past seven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Quarter past seven. Seven fifteen.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Seven fifteen. Say it both ways. Some men say one, some say the other.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And me?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'At the gate at seven. Not quarter past. Seven.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Fifteen minutes early.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Fifteen minutes early. The break is at half past ten.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Half past ten. Ten thirty.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Both ways. Good. You learn fast.' }
  ]
});

PBE1.scene('u3-3-2-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The lorry comes at quarter past seven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Quarter past seven. Seven fifteen.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Say it both ways. And you?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At the gate at seven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fifteen minutes early. The break is at half past ten.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Half past ten. Ten thirty.' }
  ]
});

PBE1.scene('u3-3-3', {
  set: 'yard',
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar, what do you do every day? The office needs it on paper.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I sign in at the gate. I read the shift board.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I check the shelves. I write the numbers on the sheet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before the break?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Before the break. Four things. Then the lorry comes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And at the end?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I put the sheet on Abu Yasser\'s table. I sign out.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Good. Six things. I write them down.' }
  ]
});

PBE1.scene('u3-3-3-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What do you do every day?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I sign in. I read the board.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I check the shelves. I write the numbers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And at the end?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I put the sheet on the table. I sign out.' }
  ]
});

PBE1.scene('u3-3-4', {
  set: 'yard',
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'And Fadi? What does he do?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'He starts at six. He checks the lorry. Then he drives to Homs.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Six. Earlier than you.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'An hour earlier. He finishes later too.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Majd?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'He opens the counter at eight. He counts the money first. Then the '
            + 'customers come.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He counts the money before the customers?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Before. Always before. He says you cannot count with people waiting.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That is true. I write that down too.' }
  ]
});

PBE1.scene('u3-3-4-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What does Fadi do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He starts at six. He checks the lorry.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Earlier than you?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'An hour earlier.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Majd?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'He opens the counter at eight.' }
  ]
});

PBE1.scene('u3-3-5', {
  set: 'yard',
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Abu Yasser, when is the count this week?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Thursday. Every Thursday.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Can I swap Thursday? My brother is in hospital on Thursday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Swap with who?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'With Samih. He is off on Thursday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then ask Samih first. Not me.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if he says yes?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'If he says yes, come and tell me and I write it on the board.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I ask him today. Then I tell you.' }
  ]
});

PBE1.scene('u3-3-5-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'When is the count this week?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thursday. Every Thursday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Can I swap Thursday? My brother is in hospital.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Swap with who?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'With Samih.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then ask Samih first. Not me.' }
  ]
});

PBE1.scene('u3-3-6', {
  set: 'yard',
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Abu Yasser. I am twenty minutes late. The road was closed at Jaramana.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Twenty minutes. All right.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I am sorry.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Say the time and the reason. You did. That is enough.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The lorry?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The lorry came at quarter past. Samih took it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I will tell Samih thank you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Do. And next time, telephone. Two minutes on the telephone and I move a man.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'I telephone. From the road.' }
  ]
});

PBE1.scene('u3-3-6-pair', {
  set: 'yard',
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Abu Yasser. I am twenty minutes late. The road was closed at Jaramana.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty minutes. All right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The lorry?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It came at quarter past. Samih took it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I will tell Samih thank you.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And next time, telephone.' }
  ]
});

PBE1.scene('u3-3-7', {
  set: 'yard',
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62] }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Hani has swapped eleven times this year. Nobody wrote one of them '
            + 'on the board.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Eleven?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I counted the sheets. Eleven.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'He always asks me first. He never asks you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is the right order. 3.5. Ask the other man first.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'And he always comes. He has never once not come.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So where is the problem?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The board says Hani on Thursday. The board is wrong eleven times.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The men know. We all know.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'The men know. The office does not. And the office pays.' }
  ]
});

PBE1.scene('u3-3-7', {
  set: 'yard',
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62] },
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62] }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Samih, are you off on Tuesday?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Tuesday. Yes.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Can I swap? My mother is in hospital on Tuesday.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'All right. I take your Tuesday, you take my Saturday.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Thank you. I tell Abu Yasser today.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Tell him today. Not Monday.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Today. And the lorry comes at quarter past seven, yes?' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Quarter past seven. You were thirty minutes late on Thursday. Do '
            + 'not be late again.' }
  ]
});
