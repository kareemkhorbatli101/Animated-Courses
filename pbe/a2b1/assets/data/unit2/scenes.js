/* Unit 2 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u2-2-1', {
  set: 'openplan',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Well? Your first full day. How was it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Long! But good. I start at eight, so I\'m here before everybody.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what do you do first?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I check the email and I make a list. Then the telephone starts.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That\'s the job. I don\'t open my email first — I count the money '
            + 'from the counter first.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And you finish at four?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'At four exactly. I don\'t stay after four. My children finish '
            + 'school at half past three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Bassel? He isn\'t here today.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Bassel doesn\'t work in the office on Sundays. He drives to Homs.' }
  ]
});

PBE3.scene('u2-2-1-pair', {
  set: 'openplan',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What time do you start?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I start at half past seven. I\'m here before everybody.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what do you do first?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'First I open the big door, then I check the night delivery.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What time do you finish?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'At half past four. I don\'t use email after that — I don\'t use '
            + 'email at all.' }
  ]
});

PBE3.scene('u2-2-2', {
  set: 'openplan',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'sheet' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning. Nour speaking.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Good morning. Tarabishi, from the Hamidiyeh. What time do you open?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The trade counter opens at half past eight, Mr Tarabishi.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And what time does it close?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'At four — but on Thursday we close at two.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'At two. I see. And the warehouse?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The warehouse is open from half past seven to half past four.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Good. Then I come on Tuesday, in the morning. At about ten.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Tuesday at ten. I\'ll tell Abu Yasser. See you then.' }
  ]
});

PBE3.scene('u2-2-2-pair', {
  set: 'openplan',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. What time do you open?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We open at nine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what time do you close?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At two — but on Friday and Saturday we\'re closed all day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I come on Monday, in the morning.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Monday in the morning. But not between eleven and twelve — it\'s '
            + 'very busy. See you then.' }
  ]
});

PBE3.scene('u2-2-3', {
  set: 'openplan',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, Mr Ayoub wants the stock numbers. How often do you '
            + 'count the stock?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The whole warehouse? Twice a month. The last Thursday and the fifteenth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fast things — the boxes, the tape?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Those I count every morning. I always walk the shelves before the '
            + 'door opens.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Every morning? That\'s a lot of walking.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Thirty years of walking, my daughter. I never trust the screen. '
            + 'The screen says ninety; sometimes the shelf says eighty-six.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'And then I write it in the book, and I tell Nadia. Check it twice.' }
  ]
});

PBE3.scene('u2-2-3-pair', {
  set: 'openplan',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'How often do you check the bank?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I check it twice a day. Usually at nine and at two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twice a day? That\'s a lot.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is, but I never work at the weekend. And you?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I check the stock every other day — about three times a week.' }
  ]
});

PBE3.scene('u2-2-4', {
  set: 'openplan',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, are you busy?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A little. I\'m working on the Homs order.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. Is Nadia in?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She\'s here, but she isn\'t at her desk. She\'s doing the '
            + 'month-end this week, so she\'s in the small room.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And Bassel? He isn\'t answering his telephone.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He\'s driving to Homs. He\'s meeting Mr Tarabishi\'s cousin at eleven.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Of course. And the warehouse?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They\'re loading the small van now. Abu Yasser is counting the '
            + 'boxes at the gate.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then everything is moving. Thank you, Nour.' }
  ]
});

PBE3.scene('u2-2-4-pair', {
  set: 'openplan',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Are you busy?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'A little. I\'m checking the invoices.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is Nadia in?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'She\'s here, but she isn\'t at her desk. She\'s doing the '
            + 'month-end in the small room.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Bassel?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'He\'s driving to Aleppo. The warehouse are checking a delivery now.' }
  ]
});

PBE3.scene('u2-2-5', {
  set: 'openplan',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'sheet' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Bassel, can I ask you something? Mr Ayoub wants a note about the sales day.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Ask. But be quick — I leave at seven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'At seven? What time do you get to Homs?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'About half past nine, if the road is good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where do you start?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'At the market. I always see the small shops first, because they open early.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many customers do you see in a day?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Five or six. Not more — I don\'t like a short visit. A short visit '
            + 'sells nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do you do with the orders?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'I send them by message the same evening. Nadia doesn\'t like a '
            + 'Thursday surprise.' }
  ]
});

PBE3.scene('u2-2-5-pair', {
  set: 'openplan',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can I ask you something? What time do you leave?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'At six. I load the lorry first, from six to seven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Where do you stop?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three stops before noon. I always do the far one first, because '
            + 'the road is empty early.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How many deliveries do you make in a day?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Six or seven. Not more.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what do you do with the delivery notes?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I write them at the end of the day, in the yard.' }
  ]
});

PBE3.scene('u2-2-6', {
  set: 'openplan',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Nour, could you send me the invoice numbers for Homs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of course. When do you need them?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Before five, if you can. The bank closes the day at five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before five… I\'m sorry, I can\'t do all of them. Bassel is still '
            + 'sending me orders.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'How many can you do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The old ones, yes — about twenty. The new ones tomorrow morning. '
            + 'Is that all right?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That\'s fine. Could you put them in one file, please? Not twenty messages.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One file. And could you tell me the format you want?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Number, date, amount. In that order.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Number, date, amount. I\'ll send it at half past four.' }
  ]
});

PBE3.scene('u2-2-6-pair', {
  set: 'openplan',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Could you give me the stock numbers, please?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Of course. When do you need them?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before three, if you can. The customer is waiting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'m sorry, I can\'t give you all of them. The warehouse is '
            + 'counting until half past three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How much can you do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Half now, and the rest at half past three. Is that all right?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That\'s fine. And could you send it in one message, please?' }
  ]
});

PBE3.scene('u2-2-7', {
  set: 'openplan',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, the new timetable is on the board. Small letters again. What '
            + 'does it say about me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s from Mr Ayoub. It\'s about the week.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The important thing first, please.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Monday meeting moves. It\'s at half past eight now, not at ten.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Half past eight. That\'s before the counter opens.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes — that\'s why they moved it. And it says the warehouse gives '
            + 'the stock numbers to accounts before the meeting, not after.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Before. So I count on Sunday evening.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s what it means, yes. Nothing else changes — the counter and '
            + 'the warehouse keep the same hours.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Good. One paper, two changes. I can keep two in my head.' }
  ]
});

PBE3.scene('u2-2-7-b', {
  set: 'openplan',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'sheet' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good afternoon. Nour speaking.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to come to the trade counter. What time '
            + 'do you open?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'At half past eight, from Sunday to Thursday.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'And you close at four?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'At four — but at two on Thursday. We\'re closed on Friday and Saturday.' },
    { who: 'caller', cam: { shot: 'close' },
      en: 'Then I\'ll come on Wednesday, at about eleven.' }
  ]
});
