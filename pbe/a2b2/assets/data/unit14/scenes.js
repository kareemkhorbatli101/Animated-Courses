/* Unit 14 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u14-14-1', {
  set: 'planning',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.46, bottom: 46, at: [0.30, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'One decision, and then the figures. We are going to open a second '
            + 'counter at the front. The builder starts on the fourteenth.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And where are the people going to come from? We are seven.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Hala is going to take the second counter from April, and Nour is '
            + 'going to train her for three weeks before that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three weeks is not very long.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is twice what you had.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the cost? The builder, the counter, the second screen.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'About four million, and it is in the budget. I am not going to '
            + 'pretend it is nothing; I am going to tell you what it buys. Eleven '
            + 'people waited more than ten minutes last Thursday and four of them '
            + 'left.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Four left.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Four that we know of.' }
  ]
});

PBE4.scene('u14-14-1-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'One decision, and then the figures. We are going to take a second '
            + 'van. It arrives in six weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And where is the driver going to come from? We have one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi is going to move to the lorry from June, and we are going to '
            + 'take on a van driver before that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the cost? The van, the insurance, the wages.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About nine million, and it is in the budget. I am not going to '
            + 'pretend it is nothing; I am going to tell you what it buys. Eleven '
            + 'deliveries were late last month and nine of them were one van '
            + 'doing two runs.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nine of eleven.' }
  ]
});

PBE4.scene('u14-14-2', {
  set: 'planning',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.46, bottom: 46, at: [0.30, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The figures. March was good. April will be quiet for ten days and '
            + 'then it will be very busy.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Why ten days?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Eid. Nobody orders in the week before and nobody opens in the week '
            + 'of. Then in the second week after, everybody orders at once, and '
            + 'we will have four days of what should be a fortnight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we will run out of boxes again.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'We will run out of boxes again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then we will order them in March. I will telephone Ms Shamsi this '
            + 'afternoon — not next week, this afternoon, because I said this '
            + 'last year and did it in April.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You did.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'I did. Write it on the board, Nour, with today\'s date on it.' }
  ]
});

PBE4.scene('u14-14-2-pair', {
  set: 'planning',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The figures. October was steady. November will be slower and then '
            + 'December will be very hard.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why December?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The rain. The Homs road takes a day longer and nobody wants a '
            + 'delivery standing in the yard. Then everything that did not move '
            + 'in December moves in the first week of January, and we will have '
            + 'one week of what should be three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So we will be short of drivers again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then we will book the hire lorry now. I will telephone the depot '
            + 'this afternoon — not in November, this afternoon, because I said '
            + 'this last year and booked it in December.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You did.' }
  ]
});

PBE4.scene('u14-14-3', {
  set: 'planning',
  arr: 2,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'Nour, I want to tell you something before it becomes news. The '
            + 'Aleppo shipment may be late. It may be nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Late by how much, if it is late?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'A week. Maybe ten days. The lorries are waiting at the crossing '
            + 'and nobody will say how long. It might clear tomorrow and it might '
            + 'not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I will plan for ten days and be pleased if it is three. Can '
            + 'you tell me two things? Which lines are on that shipment, and is '
            + 'there anything you can send from stock this week?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'The wrap and the small boxes are on it. I have forty rolls of wrap '
            + 'here that are not on anybody\'s order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Send me thirty of those today and I will not have to telephone you '
            + 'in a panic on the twentieth.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That is what I was hoping you would say. Most people say "tell me '
            + 'when you know".' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'By then it is not a possibility. It is a Tuesday with no wrap.' }
  ]
});

PBE4.scene('u14-14-3-pair', {
  set: 'planning',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Abu Yasser, I want to tell you before it becomes news. The estate '
            + 'may go to four hours of power a day next month. It may be nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Four hours by when, if it happens?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'From the first. Maybe the middle of the month. Nobody will say. It '
            + 'might be announced tomorrow and it might not.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I will plan for the first. Can you tell me two things? Which '
            + 'hours, and can the generator be serviced before then?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The hours are not decided. The generator takes two days and the '
            + 'man is free next week.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Book him for next week and I will not be telephoning him in the '
            + 'dark on the first.' }
  ]
});

PBE4.scene('u14-14-4', {
  set: 'planning',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Two hundred rolls at the old price if we order today. If we wait '
            + 'until Thursday, it is the new price — about eleven per cent more.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And if we order today, where do we put two hundred rolls?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If Abu Yasser clears the end bay, they will fit. He says he will '
            + 'if we take the broken pallets out this week.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then order them today. But if the price does not rise on Thursday, '
            + 'I want to know, because he has told us that three times this year.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If it does not rise, I will tell you and I will write it in the '
            + 'supplier note.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Write it either way. If it rises, that note is the reason we were '
            + 'right; if it does not, it is the reason we stop believing him.' }
  ]
});

PBE4.scene('u14-14-4-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Three per cent off the Aleppo invoice if we pay within ten days — '
            + 'about 240,000.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if we pay early, what do we do about the wages on the twenty-eighth?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If the Homs money comes in on the twentieth, there is no problem. '
            + 'He has paid on the twentieth for two years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then pay it. But if the Homs money has not arrived by the '
            + 'twenty-second, I want to know that morning, not on the '
            + 'twenty-seventh.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If it has not come by the twenty-second, I will tell you before '
            + 'ten and I will telephone him myself.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Write both down. If this works we will do it every quarter; if it '
            + 'does not, we will know exactly which day it broke.' }
  ]
});

PBE4.scene('u14-14-5', {
  set: 'planning',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Three months. January 36.1 million, February 38.9, March 41.2.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So it has gone up every month.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It has gone up every month, but not evenly. From January to '
            + 'February it rose by about eight per cent. From February to March '
            + 'it rose by six. The trend is up and the rate is slowing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is six per cent bad?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Six per cent is good. Six after eight is a question, not a '
            + 'problem. And February had the two big Homs orders in it, which '
            + 'were one customer, which means February was not really a February.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So what do I tell the bank?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Up eleven per cent on the same quarter last year, and say the '
            + 'quarter, not the month. One month is weather. Three months is a '
            + 'trend.' }
  ]
});

PBE4.scene('u14-14-5-pair', {
  set: 'planning',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Three months. Fourteen complaints, nine, eleven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It fell and then rose again, but not evenly. From the first month '
            + 'to the second it fell by five. From the second to the third it '
            + 'rose by two. The trend is down and the second month is the odd '
            + 'one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is eleven bad?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eleven is better than fourteen. Nine after fourteen is a question, '
            + 'not a triumph. The counter was shut for two weeks in that month, '
            + 'so fewer people came at all, which means nine is not really a '
            + 'nine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So what do I tell the meeting?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Down three on the quarter, and say the quarter, not the month.' }
  ]
});

PBE4.scene('u14-14-6', {
  set: 'planning',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Anything else before we finish?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I think we will need a second lorry by the autumn. I am not '
            + 'certain, but I think so.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because Fadi has done five late deliveries since January and four '
            + 'of them were the same thing — two runs in one day that do not fit '
            + 'in one day. If the second counter brings the customers we are '
            + 'expecting, it will be six runs a week, not four.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I agree with the problem. I am not sure about the lorry. We hired '
            + 'one for three days in November and it cost less than a month of '
            + 'payments.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is fair. Then maybe the question is not a lorry; it is what '
            + 'we do on the two days a week that do not fit.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Put it on next Monday\'s list, both of you, with the November hire '
            + 'figures. Nour — you were right to say it and you were right to say '
            + 'you were not certain.' }
  ]
});

PBE4.scene('u14-14-6-pair', {
  set: 'planning',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Anything else before we finish?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I think we will need another person on the counter by September. I '
            + 'am not certain, but I think so.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because eleven people waited more than ten minutes last Thursday '
            + 'and four left. If the second counter brings the customers we are '
            + 'expecting, Thursday will be every day.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'I agree with the problem. I am not sure about another person. '
            + 'Thursday is eleven to one; the rest of the week is quiet by half '
            + 'past eleven.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is fair. Then maybe the question is not a person; it is who '
            + 'is on the counter between eleven and one.' }
  ]
});

PBE4.scene('u14-14-7', {
  set: 'planning',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Nour. The paper on the board — the chart and the note under it. '
            + 'Nadia says growth is slowing. Does slowing mean we are going down?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Look at the three numbers: 36.1, 38.9, 41.2. Every month is '
            + 'bigger than the one before it. Slowing means it is going up less '
            + 'fast than it was, not that it is going down.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then why write it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it may mean something later and she would rather say it '
            + 'now than explain it in June. Read the last line: if April is below '
            + 'four per cent I would want to look at why. That is a number she '
            + 'has put there so that nobody argues about it in April.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And the second counter?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is going to happen — it is decided, the builder starts on the '
            + 'fourteenth. The rest of the note is may and I think. The chart is '
            + 'what happened. The note is what one person expects, and she has '
            + 'said which parts she is sure of.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So the work is going up.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The work is going up. The note does not say that anywhere, and it '
            + 'is the thing it most means for you.' }
  ]
});

PBE4.scene('u14-14-7-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'They are going to cut the drivers. It says costs rose nine per '
            + 'cent because of transport.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read the last line. We do not expect any change to staffing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They always say that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then sort it by the verbs. We are going to review all delivery '
            + 'routes in June — that is decided, and it is about routes. Margins '
            + 'may come under pressure — that is a possibility and it binds '
            + 'nobody. There is no will anywhere about people.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what does it mean for me?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'It means your route may change in June and your job is not in this '
            + 'document at all. If you want to be useful before June, bring them '
            + 'the figures for the two drops that are always late.' }
  ]
});

PBE4.scene('u14-14-7-b', {
  set: 'planning',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Three months: 36.1, 38.9 and 41.2 million. The biggest single rise '
            + 'was January to February, eight per cent.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'February had two large Homs orders from one customer in it, so it '
            + 'is better read as a good month than as a new level.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'The second counter is going to open in May; that is decided. '
            + 'Transport costs may rise again if the fuel price moves, and if '
            + 'April is below four per cent I would want to look at why.' }
  ]
});
