/* Unit 15 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u15-15-1', {
  set: 'printercorner',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, the printer is not working.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It printed the notes this morning. What is it doing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is jamming. It takes about ten pages and then the paper catches '
            + 'at the back, on the left side, and the light flashes twice.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Since when?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Since Thursday. It did it twice on Thursday and four times today. '
            + 'It is getting worse, not better.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And what have you tried?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I have taken the back off and cleared it three times, and I have '
            + 'tried the other paper. It does it with both.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Now that is a report. Telephone the man and say exactly what you '
            + 'have just said to me, in that order, and he will bring the part '
            + 'with him. Say "it is not working" and he will come, look, and come '
            + 'back on Thursday with the part.' }
  ]
});

PBE4.scene('u15-15-1-pair', {
  set: 'printercorner',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Fadi, the van is not working.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It went to Homs on Monday. What is it doing?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is making a noise. When I turn right there is a knocking from '
            + 'the front left. Turning left, nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Since when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Since the rain last Tuesday. Four or five times a day now, and '
            + 'worse when it is loaded.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what have you tried?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I have checked the tyre pressure and looked underneath. I have not '
            + 'changed anything.' }
  ]
});

PBE4.scene('u15-15-2', {
  set: 'printercorner',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The wrap will not be here until Thursday and the Tarabishi order '
            + 'goes out on Tuesday. Three ideas.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Why don\'t we send it without wrap and wrap it at his shop?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We could, but his shop is a doorway and a counter. There is '
            + 'nowhere to do it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then what about buying twenty rolls locally, just for this one?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That costs about forty thousand more. It is possible. Keep it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Or we could send the Tarabishi order on Thursday with the Homs '
            + 'lorry, which passes his street anyway.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thursday is two days late. Shall we telephone him and ask which he '
            + 'would rather have — late and right, or Tuesday and wrapped in '
            + 'something he has to pay for?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'He will say Thursday.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'He probably will. But he will say it, and then it is his Thursday, not ours.' }
  ]
});

PBE4.scene('u15-15-2-pair', {
  set: 'printercorner',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Fadi is ill and the Hama run is tomorrow. Four drops, one of them '
            + 'new. Three ideas.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why don\'t we send it with a service driver?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We could, but the new customer has never seen us. The first '
            + 'delivery should be ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what about moving the run to Thursday?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That costs us the new customer\'s opening week. It is possible. Keep it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Or Abu Yasser could drive and we close the warehouse until eleven.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Shall we telephone the new customer and ask whether Thursday '
            + 'morning is better for him than tomorrow afternoon?' }
  ]
});

PBE4.scene('u15-15-3', {
  set: 'printercorner',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The Jaramana shop has been waiting eleven days for an answer on '
            + 'the shelving. If we wait for the Aleppo price, we will lose the '
            + 'order.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'How do you know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because he telephoned twice last week and not at all this week. '
            + 'Unless we go to him with a price on Sunday, he will have bought it '
            + 'somewhere else by the time we have one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And if we quote without the Aleppo price, we may be quoting below '
            + 'our own cost.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then quote with this month\'s cost plus the same margin and say '
            + 'the price holds for fourteen days. If Aleppo comes in higher, we '
            + 'lose a little on one order. If we say nothing, we lose the shop.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Quote it. But I am not going to make that a habit — if we do it '
            + 'twice, every quotation in this office starts being a guess.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then let it be the exception, and write down why.' }
  ]
});

PBE4.scene('u15-15-3-pair', {
  set: 'printercorner',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Haffar has been forty days on 2.3 million. If we keep delivering, '
            + 'we will be carrying four million by June.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How do you know?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because he has ordered twice since the invoice and paid nothing. '
            + 'Unless we stop at the next order, the debt grows faster than the '
            + 'trade.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if we stop, we may lose nine years of a customer who has '
            + 'always paid in the end.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then deliver the next one and tell him it is the last until '
            + 'something comes. If he pays, we lose nothing. If we say nothing, '
            + 'we lose four million and the customer anyway.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Do it. But I am not going to make that a habit — if we do it '
            + 'twice, nobody here knows what our terms mean.' }
  ]
});

PBE4.scene('u15-15-4', {
  set: 'printercorner',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Tell me the order of it. Not who — what.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The order was taken on Sunday afternoon. Sixty boxes, four sizes. '
            + 'It was entered on the system on Sunday evening with one line '
            + 'missing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was picked on Monday from the system, so the missing line was '
            + 'not picked. It was loaded on Monday evening and it was delivered '
            + 'on Tuesday morning. The customer signed for four items; the note '
            + 'said four items; the order was five.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'When was it noticed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On Tuesday afternoon, by the customer. It was not noticed here at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The line was dropped by —' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Stop. I do not want the name yet and neither do you. Three people '
            + 'touched that order and the system let all three of them through. '
            + 'Tell me where it could have been caught, and then we will know '
            + 'whether the name matters.' }
  ]
});

PBE4.scene('u15-15-4-pair', {
  set: 'printercorner',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Tell me the order of it. Not who — what.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The invoice was raised on the 2nd. It was raised at the old price, '
            + 'because the price list on the desk had not been changed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was sent on the 3rd and received the same day. It was queried '
            + 'by the customer on the 9th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'When was the query opened?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'On the 14th. It was in the shared folder from the 9th and it was '
            + 'not opened for five days.' }
  ]
});

PBE4.scene('u15-15-5', {
  set: 'printercorner',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Tarabishi, it\'s Nour at Sham Trading. I am afraid your order '
            + 'is one line short — the twelve small white boxes are missing. You '
            + 'have the other four lines.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'I know. My nephew counted them at three o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was our mistake, at entry. The line was not put on the system '
            + 'on Sunday evening, so it was never picked.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And they are on the van at four o\'clock today. Fadi will be at '
            + 'your shop before six. If that is too late, I can send them with a '
            + 'service driver within the hour, and we pay.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Four o\'clock is fine. Nour — the boxes are not the thing. The '
            + 'thing is that I found out from my nephew and not from you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. We did not notice it here at all. That is the part I am '
            + 'going to fix, and I will tell you what we changed.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Good. Tell me in a fortnight, not tomorrow. Tomorrow you will only '
            + 'tell me what you intend.' }
  ]
});

PBE4.scene('u15-15-5-pair', {
  set: 'printercorner',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Haffar, it\'s Hala at Sham Trading. I am afraid the shelving '
            + 'will be two days late. The rest of the order is on today\'s van.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I know it is late. I told my own customer Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was our mistake. The order was sent to Aleppo a day later than '
            + 'we told you.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And it is on Thursday\'s lorry, with you before noon. If that is '
            + 'too late for your customer, I can send it by service driver on '
            + 'Tuesday afternoon, and we pay.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Thursday is fine for me. The problem is the man I promised Tuesday to.' }
  ]
});

PBE4.scene('u15-15-6', {
  set: 'printercorner',
  arr: 2,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'I need forty metres of the wide wrap. Have you got it, and can it '
            + 'come today?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The wide wrap — let me check the shelf and the van, and I will '
            + 'telephone you back within twenty minutes. Is this number good for '
            + 'you?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'This number. Twenty minutes.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Mr Haffar, it is Hala, nineteen minutes. Two answers and one '
            + 'half-answer. We have thirty-two metres, not forty. It can come '
            + 'today — the van passes you at half past three.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And the other eight metres?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is the half-answer. A delivery is due on Thursday and I have '
            + 'not been able to confirm the time, so I will not promise you '
            + 'Thursday. I will know by four today and I will telephone you '
            + 'either way.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Send the thirty-two on the van and telephone me at four.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'Thirty-two on the half past three van, and I telephone you at four.' }
  ]
});

PBE4.scene('u15-15-6-pair', {
  set: 'printercorner',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I need a price for three hundred rolls. Can you do better than the '
            + 'hundred price?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three hundred — let me put that to the manager and I will '
            + 'telephone you back by half past eleven. Is this number good for '
            + 'you?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'This number.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Samaan, it is Nour, twenty past. One answer and one '
            + 'half-answer. Three hundred is 6% below the hundred price, '
            + 'confirmed. The half-answer is delivery: three hundred will not go '
            + 'on one van, so it is two days unless we hire, and I have not been '
            + 'able to price the hire yet.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when will you know?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'By four o\'clock, and I will telephone you either way.' }
  ]
});

PBE4.scene('u15-15-7', {
  set: 'printercorner',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Nour. The report on the board about order 0418. It says the load '
            + 'was checked against the note and not the order. That is me. That '
            + 'is my signature at the bottom of the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read it again and count the names.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There are no names.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There are no names because three people touched that order and the '
            + 'system let all three through. Look at the last paragraph: what was '
            + 'not the cause — the picking, the driver and the customer. All '
            + 'three did what they were given. You are in that sentence, on the '
            + 'right side of it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then why is the loading in the report at all?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it is the place it could have been caught, and because the '
            + 'instruction you were given was wrong. You were told to check the '
            + 'load against the note. From Sunday, loaders check against the '
            + 'order. That is the change, and it is the only thing the report is '
            + 'asking of you.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So I am not being told off.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You are being given a different instruction, in writing, with a '
            + 'date on it. If this had been about you, your name would be in it, '
            + 'and I would have told you before the board did.' }
  ]
});

PBE4.scene('u15-15-7-pair', {
  set: 'printercorner',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I signed that gate record. It says fourteen boxes were recorded as '
            + 'received and were not on the shelf.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Count the names.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are none.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And read the last line: not the cause — the gate, which recorded '
            + 'what arrived. You are in that sentence, on the right side of it. '
            + 'The gate did its job; the fourteen boxes went somewhere between '
            + 'the gate and the shelf, and nobody checks that step at all.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then why is the gate in the report?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Because it is where the trail starts and because your record is '
            + 'the only reason we know the boxes arrived. The thing it asks for '
            + 'is a second signature at the shelf, from Sunday.' }
  ]
});

PBE4.scene('u15-15-7-b', {
  set: 'printercorner',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'It is jamming. It takes about ten pages and then the paper catches '
            + 'at the back, on the left side, and the light flashes twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Since Thursday. Twice on Thursday, four times today — so it is '
            + 'getting worse, not better.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I have cleared the back three times and I have tried the other '
            + 'paper. It does it with both.' }
  ]
});
