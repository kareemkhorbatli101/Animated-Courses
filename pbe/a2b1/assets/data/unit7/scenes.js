/* Unit 7 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u7-7-1', {
  set: 'boardroom',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, Nadia is away for five days from Sunday. Can you cover the '
            + 'simple things?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which things exactly?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The counter money, the small invoices, the bank at nine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I can do the counter money — Nadia showed me twice. I can use the '
            + 'accounts system, but only to look, not to change anything.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That\'s enough for the small invoices?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is. But I can\'t sign them. The system won\'t let me, and I '
            + 'shouldn\'t anyway.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'No, you shouldn\'t. I\'ll sign at four every day; you put them in '
            + 'the blue tray.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the bank? I can go at nine, but I can\'t be in two places — '
            + 'the counter opens at half past eight.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then Hala opens the counter on those five days. Can you show her '
            + 'on Thursday?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I can show her Thursday afternoon. She learns quickly.' }
  ]
});

PBE3.scene('u7-7-1-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Rasha is away for a week. Can you cover the counter?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which things exactly?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Serving customers, the till, and the usual orders.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I can serve and I can use the till. I can order, but only the '
            + 'usual items, not anything new.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s enough for a week?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is. But I can\'t give advice on prescriptions, and I can\'t '
            + 'open the controlled cupboard.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the pharmacist does both. Can you show the new girl the till '
            + 'on Thursday?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I can show her Thursday afternoon. She learns quickly.' }
  ]
});

PBE3.scene('u7-7-2', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, good morning. It\'s Nour at Sham Trading. I\'m '
            + 'telephoning about Thursday.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Eleven o\'clock, in your boardroom. Is there a problem?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A small one. Mr Ayoub has the bank at eleven on Thursday. Could '
            + 'you come at ten instead?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Ten. Let me look… yes, ten is possible. I leave Aleppo at six anyway.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. And could you bring the new price list? We only have '
            + 'the January one.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'I can bring it. Anything else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One more thing — could you send me the figures for the wrap before '
            + 'Thursday? Then Mr Ayoub can read them and we don\'t spend the '
            + 'meeting on numbers.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That\'s a good idea. I\'ll send them Tuesday evening.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thursday at ten, the new price list, and the figures on Tuesday. '
            + 'Thank you, Ms Shamsi.' },
    { who: 'shamsi', cam: { shot: 'close' },
      en: 'You read everything back. Somebody taught you well.' }
  ]
});

PBE3.scene('u7-7-2-pair', {
  set: 'boardroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Hamdi, good morning. It\'s Rasha. I\'m telephoning about the kitchen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Monday, I have it written. Is there a problem?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A small one. Could you start on Saturday instead? My mother is '
            + 'here from Monday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me look… yes, Saturday is possible.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. And could you take the old tiles away? We have nowhere '
            + 'to put them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I can, but there\'s a charge for that — about forty thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s fine. One more thing — could you send me the price in '
            + 'writing before you start? Then nobody has to remember anything.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'ll send it Friday evening.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Saturday, the tiles taken away, and the price by Friday evening. Thank you.' }
  ]
});

PBE3.scene('u7-7-3', {
  set: 'boardroom',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, I need an hour with you and Abu Yasser about the stock card. '
            + 'What are we doing this week?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me look at the diary. Sunday morning you\'re seeing the bank.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And Monday is the meeting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Monday is the meeting, and after it Bassel is coming in with the '
            + 'Homs figures. Tuesday the Aleppo lorry arrives, so Abu Yasser is '
            + 'at the gate all morning.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Wednesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wednesday is difficult. Hala is starting at the counter, so I\'m '
            + 'with her from half past eight.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And Thursday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thursday Ms Shamsi is coming at ten. But we\'re free from eight to '
            + 'half past nine — Abu Yasser is here from half past seven anyway.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Thursday at eight, then. One hour, not more.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Thursday at eight. I\'ll tell Abu Yasser today, not on Thursday morning.' }
  ]
});

PBE3.scene('u7-7-3-pair', {
  set: 'boardroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I need an hour about the trip money. What are we doing this week?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me look. Sunday I\'m doing exams all day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Monday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Monday is teaching until one, and after that the parents are '
            + 'coming in until four.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Tuesday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tuesday is difficult. The inspector is coming at ten, so I\'m in '
            + 'my classroom all morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Wednesday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Wednesday we\'re free after eleven.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Wednesday at eleven, then. One hour, not more.' }
  ]
});

PBE3.scene('u7-7-4', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Tarabishi, about the meeting on the new branch. Could you come '
            + 'on Thursday at eleven?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Thursday I\'m in Homs. The new branch, you understand — I\'m there '
            + 'every Thursday now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of course. How about Wednesday, same time?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Wednesday morning the stock comes. In the afternoon I can.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wednesday afternoon… Mr Ayoub is at the head office until four.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Then we are two busy men and one busy girl.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What about Tuesday instead? Mr Ayoub is here all day, and the '
            + 'counter is quiet after two.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Tuesday at half past two. That suits me better than any of them — '
            + 'I pass your street anyway.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tuesday the eighteenth, half past two, in the boardroom. I\'ll '
            + 'send it in writing.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Send it in writing. My memory is not what it was, and my son will '
            + 'ask me where I am going.' }
  ]
});

PBE3.scene('u7-7-4-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'About your son\'s report. Could you come on Tuesday at two?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tuesday at two I\'m at work. I finish at three and I can\'t leave.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Of course. How about Wednesday, same time?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Wednesday the school closes at two, doesn\'t it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It does — except Wednesday is our late day. We\'re open until five.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then Wednesday at half past three. That suits me better than any of them.' }
  ]
});

PBE3.scene('u7-7-5', {
  set: 'boardroom',
  arr: 1,
  cast: {
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'tarabishi', cam: { shot: 'wide' },
      en: 'Nour, the new branch opens on Wednesday at eleven. You will come, '
            + 'you and Mr Ayoub.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you — I\'d love to. Wednesday at eleven. Let me check for Mr Ayoub.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'He must come. Twelve years we have worked together.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. I\'m afraid he can\'t on Wednesday — he\'s at the head '
            + 'office in Aleppo until Thursday. He will be very sorry.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Aleppo. Of course. Business.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'But he asked me to say this: he would like to come to the branch '
            + 'the following week, when the shop is quiet and he can see it '
            + 'properly. Would that suit you?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'That is better than the opening. At an opening nobody talks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I\'ll come on Wednesday with the gift, and Mr Ayoub comes the '
            + 'Tuesday after.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Good. And tell him: the new branch has a chair for him, by the window.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I\'ll tell him exactly that.' }
  ]
});

PBE3.scene('u7-7-5-pair', {
  set: 'boardroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My cousin\'s wedding is on Friday at six. You will come, you and '
            + 'the manager.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you — I\'d love to. Friday at six. Let me check for the manager.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He must come. He knows the family.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I know. I\'m afraid he can\'t on Friday — he\'s travelling until '
            + 'Saturday night. He will be very sorry.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Travelling. Of course.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'But he asked me to say this: he would like to visit the family the '
            + 'following week, when it is quiet. Would that suit you?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That is better than the wedding. At a wedding nobody talks.' }
  ]
});

PBE3.scene('u7-7-6', {
  set: 'boardroom',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'The stock-card hour. Morning or afternoon?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Morning. I\'d rather talk before the lorries than after them. '
            + 'After four o\'clock my head is full of numbers that are not the '
            + 'ones you want.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Nour?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I prefer the morning too, but for a different reason — I\'d rather '
            + 'do difficult things early than carry them all day.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Morning it is. And where? Here, or down in the warehouse?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The warehouse. I\'d rather show you the shelf than describe it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'d prefer the office, honestly. In the warehouse we\'ll stop '
            + 'every two minutes — somebody always needs you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is true.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then we do both: half an hour in the office with the card, and ten '
            + 'minutes at the shelf afterwards. Does that suit everybody?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That suits me better than either.' }
  ]
});

PBE3.scene('u7-7-6-pair', {
  set: 'boardroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The village. Early Friday or late Thursday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Late Thursday. I\'d rather travel at night than lose half of '
            + 'Friday, and the road is empty after nine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how long? Two nights or one?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two. I\'d rather arrive tired and stay than drive both ways in one day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I\'d prefer one night, honestly. With two, we spend Saturday in the car.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is true.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then we do both: we go late on Thursday and come back on Saturday '
            + 'morning, early. Does that suit everybody?' }
  ]
});

PBE3.scene('u7-7-7', {
  set: 'boardroom',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, there\'s a paper on the board with my name on it. It says '
            + '"attendance" and "apologies". Am I in trouble?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You\'re not in trouble. It\'s a meeting invitation. I\'ll tell you '
            + 'what it means for you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'What it means for me. Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thursday the twentieth, eight o\'clock, in the small room '
            + 'upstairs. One hour, not more.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Eight o\'clock. I\'m here at half past seven anyway. And what is it about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The stock card — why the shelf and the screen keep disagreeing. '
            + 'You, Mr Ayoub and me.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And "apologies"?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That only means: if you can\'t come, tell me before, so I don\'t '
            + 'wait for you. It isn\'t an apology for anything you\'ve done.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Ah. In my day it said "be there at eight".' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'One more thing: bring the book. Not the computer figures — the '
            + 'book, with the pencil marks. That\'s the part people get wrong; '
            + 'they bring the printout.' }
  ]
});

PBE3.scene('u7-7-7-b', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Tarabishi, I\'m telephoning about the meeting on Tuesday.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Half past two, I have it here.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Could we make it three instead? Mr Ayoub is at the bank until half past two.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Three o\'clock is fine. In the boardroom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In the boardroom, on the ground floor. Could you bring last '
            + 'year\'s order sheets?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'I\'ll bring them. Anything else?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'If anything changes, could you tell me by Monday evening?' }
  ]
});
