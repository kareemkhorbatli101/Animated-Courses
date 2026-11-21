/* Unit 8 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u8-8-1', {
  set: 'canteen',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, the week. Before you write it, tell me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On Sunday I checked the counter money and I walked it to the bank. '
            + 'On Monday I started the new stock card with Abu Yasser.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And Tuesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tuesday I finished the Homs order and I printed the delivery '
            + 'notes. The lorry loaded at six and arrived at half past nine.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. Wednesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wednesday I showed Hala the counter. We opened together at half '
            + 'past eight and she served fourteen customers alone in the '
            + 'afternoon.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Fourteen. And what didn\'t you finish?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Aleppo invoices. I started them twice and I stopped twice — '
            + 'the telephone.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then write that too. A week with nothing unfinished in it is a '
            + 'week somebody invented.' }
  ]
});

PBE3.scene('u8-8-1-pair', {
  set: 'canteen',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The week. Before you write it, tell me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On Sunday I counted the stock and I ordered the bread.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Monday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Monday I cleaned the fridges and I changed the prices. The new '
            + 'list arrived at eight.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. Tuesday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tuesday I served about ninety customers. We closed late — at half past nine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what didn\'t you finish?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The summer order. I started it twice and I stopped twice.' }
  ]
});

PBE3.scene('u8-8-2', {
  set: 'canteen',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'You went to Homs and Hama in two days? How was it?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I went to Homs on Sunday and Hama on Monday. I saw four customers '
            + 'in Homs and two in Hama.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Six in two days. Did you get the Tarabishi order?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I got it. Four hundred and twenty thousand — he took the big boxes '
            + 'this time. I sent it to you Sunday evening.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I had it Monday morning. And Hama?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Hama gave me an order and a complaint. Abu Nidal said the March '
            + 'delivery came two days late and nobody told him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That was the week of the diversion.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I know. He knows too. He didn\'t say it was our fault — he said '
            + 'nobody telephoned. That\'s a different thing, and he\'s right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Did you promise him anything?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'I promised he would get a telephone call next time, before he '
            + 'asks. I didn\'t promise a discount. We don\'t pay money for a '
            + 'mistake that costs a telephone call.' }
  ]
});

PBE3.scene('u8-8-2-pair', {
  set: 'canteen',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You went to Aleppo and Idlib in two days? How was it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I went to Aleppo on Tuesday and Idlib on Wednesday. I saw three suppliers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Did you get a better price on the tape?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I got it — twelve per cent down if we take forty rolls. I sent you '
            + 'the figures that night.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the gloves?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We lost the glove supplier. He closed in February and nobody told '
            + 'us. One of them also made a complaint: our last order came with no '
            + 'invoice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Did you promise anything?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I promised the invoice by Thursday. I didn\'t promise a new glove '
            + 'supplier — I don\'t have one yet.' }
  ]
});

PBE3.scene('u8-8-3', {
  set: 'canteen',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'I was away five days. How was it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Busy. Not bad — busy. Sunday and Monday were normal. Tuesday was '
            + 'the Homs order, so the morning was hard and the afternoon was '
            + 'quiet.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And Wednesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wednesday was difficult. Hala\'s first day at the counter, so I '
            + 'was with her all morning, and the telephone was ringing the whole '
            + 'time.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Were there many customers?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There were fourteen in the afternoon alone. She was very good, '
            + 'honestly. She was nervous at nine and fine by eleven.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the invoices?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The invoices were the problem. I didn\'t finish them. I wasn\'t '
            + 'able to sit for twenty minutes.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Nobody is, on that counter. What was the best thing?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Thursday. Ms Shamsi was here and the wrap price was agreed. That '
            + 'was the best thing — and the easiest.' }
  ]
});

PBE3.scene('u8-8-3-pair', {
  set: 'canteen',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I was away four days. How was it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Hard. Not bad — hard. Monday and Tuesday were normal.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Wednesday?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Wednesday was the difficult one. The doctor was ill, so there were '
            + 'forty patients and only two nurses.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Were there many complaints?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There were three, and all three were fair. Everybody was tired by two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What was the best thing?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The new appointment book. Nobody waited more than half an hour on '
            + 'Thursday. That was the best thing — and the cheapest.' }
  ]
});

PBE3.scene('u8-8-4', {
  set: 'canteen',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Nour, Khalil & Sons say they never had invoice 0412-7. When did you send it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On the twelfth, the same day. Let me look… yes, the twelfth, by '
            + 'email at 4.20.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Who did you send it to?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'To the address on the order form. k.sons@mail.sy.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And did you get a reply?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No, I didn\'t. I didn\'t think about it — most customers don\'t reply.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Did anybody telephone them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody telephoned. Should I have?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Not then. Now, yes. Wait — what did the order form say, exactly?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'k.sons@mail.sy.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what does the invoice say?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'k.sons@mail.sy… no. k.son. One letter. The invoice went to the '
            + 'wrong address and nobody got anything back, because nobody gets a '
            + 'reply from an address that doesn\'t exist.' }
  ]
});

PBE3.scene('u8-8-4-pair', {
  set: 'canteen',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The school says they never had the delivery. When did you send it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On the eighth. Let me look… yes, the eighth, in the morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Who did you send it with?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With Fadi, on the Homs run.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And did he get a signature?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He got one. It\'s on the note.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Did anybody read the name on the signature?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody did. Should I have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Wait — what address did the note say, exactly?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The school, Zahra Street… that\'s the old branch. They moved in January.' }
  ]
});

PBE3.scene('u8-8-5', {
  set: 'canteen',
  arr: 1,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Everybody keeps talking about "that Tuesday". What happened?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was in March. First, the road was closed at Nasiriyah — a lorry '
            + 'turned over, nobody was hurt. So Fadi went round by the old road.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'That only makes it late.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It does. Then his telephone died. He charged it in the lorry, but '
            + 'the socket in that lorry didn\'t work and nobody knew.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'So nobody could tell the customer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody could tell the customer. And I didn\'t telephone him '
            + 'either, because I was waiting to hear from Fadi.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'That\'s the real mistake.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s the real mistake. After that he arrived at four instead of '
            + 'eleven, and the shop was closed for lunch.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And in the end?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'In the end the customer telephoned us, at half past four, to ask '
            + 'whether we were still in business. Abu Nidal still mentions it, a '
            + 'year later, and he is right to.' }
  ]
});

PBE3.scene('u8-8-5-pair', {
  set: 'canteen',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Everybody keeps talking about that wedding. What happened?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was in September. First, the hall double-booked us with another '
            + 'family. So we moved to the garden.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That only makes it smaller.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does. Then the cook\'s van broke down on the Homs road. He '
            + 'telephoned his brother, but his brother was at a funeral and '
            + 'nobody knew.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So nobody could tell the families.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody could. And I didn\'t telephone my aunt either, because I '
            + 'was waiting to hear about the food.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s the real mistake.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That\'s the real mistake. After that two hundred people arrived at '
            + 'six for a lunch. And in the end the neighbours cooked.' }
  ]
});

PBE3.scene('u8-8-6', {
  set: 'canteen',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Nour. Sit down. Tarabishi took the whole range for the new branch.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Really? The whole range?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The whole range. One million two hundred thousand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s wonderful. Congratulations — honestly, that\'s the biggest '
            + 'single order this year.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How did it happen? Last month he was taking the small boxes only.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'His son came into the business. The son wants everything from one '
            + 'supplier, and we were the one he knew.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the twelve years did it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The twelve years did it. And one more thing — he asked for you by '
            + 'name. He said: the girl who repeats the numbers back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Did he? That\'s… that\'s made my week, actually.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'Good. Now go and tell Mr Ayoub before I do, because he\'ll want to '
            + 'hear it from you.' }
  ]
});

PBE3.scene('u8-8-6-pair', {
  set: 'canteen',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Rasha. Sit down. My sister got into medical school.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Really? Medical school?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In Damascus. She heard this morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s wonderful. Congratulations — honestly, after two years of trying.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How did it happen? Last year she was twenty marks short.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She took the exam again in September and nobody knew except my mother.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So she did it quietly.' }
  ]
});

PBE3.scene('u8-8-7', {
  set: 'canteen',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour. The week is on the board and my name is in it twice. Read it '
            + 'to me — the parts about the warehouse.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Only the warehouse parts. The first one is good: it says we '
            + 'started the new stock card on Monday and agreed the four columns, '
            + 'with you.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second one says: "variance between physical and system stock '
            + 'reduced from 9 per cent to 2 per cent."' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And in Arabic, as it were?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It means the shelf and the screen used to disagree about nine '
            + 'times in a hundred. Now they disagree about twice. That\'s your '
            + 'morning walk, written as a number.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nine to two. In three weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In three weeks. The word "variance" only means the difference '
            + 'between two numbers that should be the same. Nobody is being '
            + 'blamed; it\'s a measurement.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I wanted to know that before I read my name twice.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I know. That\'s why I read you the first one first.' }
  ]
});

PBE3.scene('u8-8-7-b', {
  set: 'canteen',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'How was it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Busy. Sunday and Monday were normal, but Wednesday was the hard '
            + 'one — it was Hala\'s first day and I was with her all morning.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And did anything go wrong?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One invoice went to the wrong email address. We found it and sent it again.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'What didn\'t you finish?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Aleppo invoices. They\'re in the blue tray.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the best thing?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Thursday. We agreed the new wrap price and we were finished by '
            + 'half past eleven.' }
  ]
});
