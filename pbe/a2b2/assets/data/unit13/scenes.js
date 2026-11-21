/* Unit 13 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u13-13-1', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nadia, the bank form wants the years. How long have you worked here?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Eleven years. Since 2015 — no, since March 2015, so eleven in the spring.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven years. And Abu Yasser?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Here, nineteen. In the trade, thirty-one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thirty-one years. I have worked here for one.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You have worked here for one year and you have learned the thing '
            + 'that takes most people five. Experience is not the number on the '
            + 'form, Nour. The form cannot see the difference between a man who '
            + 'has done one year thirty-one times and a man who has done '
            + 'thirty-one years.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And which are you?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Ask the shelf.' }
  ]
});

PBE4.scene('u13-13-1-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Nadia, the form wants the years. How long have you worked here?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eleven years. Since 2015 — no, since March 2015, so eleven in the spring.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eleven years. And Abu Yasser?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Here, nineteen. In the trade, thirty-one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have worked here for one year.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You have worked here for one year and you have already filled in a '
            + 'form that two of us got wrong.' }
  ]
});

PBE4.scene('u13-13-2', {
  set: 'interview',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Three for the customer service post. Have you read them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twice. Have you ever noticed that they all say the same four words?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Hard-working, reliable, motivated, team player. Yes. Which one has '
            + 'done the work?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second one has never worked in an office. She has worked in a '
            + 'pharmacy for four years, which is a counter, a queue and a hundred '
            + 'questions a day.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Has she ever used an order system?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She has used a stock system. Not ours. I had never used ours '
            + 'either, and that was one year ago.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is the argument. Say it to me again on Sunday with her name in it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Hala Mourad.' }
  ]
});

PBE4.scene('u13-13-2-pair', {
  set: 'interview',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Three for the driver post. Have you read them?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twice. Have you ever noticed that they all say the same four words?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Hard-working, reliable, motivated, team player. Which one has done the work?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The first one has never driven a lorry over three tonnes. He has '
            + 'driven for a bakery for six years — forty stops before nine in the '
            + 'morning, and no complaints.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Has he ever driven at night?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'He has started at four for six years. Not the same, but it is '
            + 'closer than any of the others.' }
  ]
});

PBE4.scene('u13-13-3', {
  set: 'interview',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.46, bottom: 46, at: [0.31, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Monday list. Invoices?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Sent. I have already sent them — Friday, not this morning.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The Homs note?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not yet. Fadi has just come back and the signature is in the van. '
            + 'I have printed it and I am waiting for the paper.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the room for Thursday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Done. I have booked the small room and I have taken the chairs out '
            + 'of it, because last time there were nine chairs and three people.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Write that down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I have already written it down. That is why I remembered it.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'That is the whole of it. The list is not better than your memory. '
            + 'The list is your memory, standing where you can see it.' }
  ]
});

PBE4.scene('u13-13-3-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Monday list. Invoices?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sent. I have already sent them — Friday, not this morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The supplier price list?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not yet. I have asked twice and I am still waiting. I have written '
            + 'again and I am waiting for Wednesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the interview letters?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Done. I have printed them and I have put them on your desk, '
            + 'because last time one went out with the old address on it.' }
  ]
});

PBE4.scene('u13-13-4', {
  set: 'interview',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Her application says she has worked at the pharmacy since 2021. '
            + 'And she has worked at a bakery in 2019.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Not has worked. She worked at a bakery in 2019.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the same job. Why is it a different tense?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Because 2019 is finished and she is not there. The tense is doing '
            + 'the work of a sentence. She has worked at the pharmacy since 2021 '
            + '— she is still there. She worked at a bakery in 2019 — she left.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So if I write has worked for the bakery, Mr Ayoub thinks she has '
            + 'two jobs now.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'He thinks it for about three seconds, and then he thinks something '
            + 'worse: that the person who wrote the summary did not read the '
            + 'dates.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is me.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'That is you. And that is why we do this twice.' }
  ]
});

PBE4.scene('u13-13-4-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'It says he has driven for a building company since 2019. And he '
            + 'has driven for a bakery in 2016.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not has driven. He drove for a bakery in 2016.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the same work. Why is it a different tense?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because 2016 is finished and he is not there. He has driven since '
            + '2019 — still there. He drove in 2016 — left.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So if I write has driven for the bakery, it looks as if he has two jobs.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'For three seconds. Then it looks as if nobody read the dates.' }
  ]
});

PBE4.scene('u13-13-5', {
  set: 'interview',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'If I had to write my own CV today, I would have one year and nothing to say.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Read me what you would write.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hard-working, reliable, good communication skills.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Those are three things that cannot be checked. Try again, and only '
            + 'write what somebody could test you on in ten minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I can take an order on the telephone with four items and read it '
            + 'back without asking twice. I can raise an invoice and find the '
            + 'mistake before the customer does. I have trained Fadi on the '
            + 'delivery notes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a year. And it is three sentences, and every one of them '
            + 'could be tested in ten minutes with a telephone and a screen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds like boasting.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'It sounds like a fact. Boasting is what people do instead of '
            + 'facts. Say the fact in a flat voice and let the reader be '
            + 'impressed on their own time.' }
  ]
});

PBE4.scene('u13-13-5-pair', {
  set: 'interview',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'If I had to write a CV today, I would have one year in a warehouse '
            + 'and nothing to say.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me what you would write.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Hard-working, reliable, good team player.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Those are three things that cannot be checked. Only write what '
            + 'somebody could test in ten minutes.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I can count a shelf of ninety lines against the screen in an hour. '
            + 'I found a difference of fourteen boxes in March and traced it to '
            + 'the gate. I have never had a delivery refused for bad packing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is a year. And every one of them could be tested with a shelf '
            + 'and an hour.' }
  ]
});

PBE4.scene('u13-13-6', {
  set: 'interview',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Well?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She answered the first question in about a minute and she had '
            + 'three parts to it. Now: four years at a pharmacy counter, eighty '
            + 'to a hundred and twenty people a day. Then: the bakery, where she '
            + 'learned to open at five and count money while tired. Next: she '
            + 'wants to do the same work where the customer comes back, instead '
            + 'of once.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then she stopped. She did not fill the silence. She said "that '
            + 'is me" and waited, and you asked the next question.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I did. Did she ask us anything?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One thing, at the end. She asked what the hardest week of the year '
            + 'is here, so she knows before she starts.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Write to her tomorrow. And Nour — you have just described a good '
            + 'interview answer better than the book I have in my drawer.' }
  ]
});

PBE4.scene('u13-13-6-pair', {
  set: 'interview',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Tell me about yourself.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now: I am an administrative assistant at a trading company in '
            + 'Mezzeh, and I have been there a year. I take the telephone orders '
            + '— about fifteen a day — and I raise the invoices.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then: before that I was at a school office for two years, where I '
            + 'learned that if you do not write it down when the parent says it, '
            + 'it did not happen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Next: I want to do the whole of an order instead of the first half '
            + 'of it. That is me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. Anything you want to ask?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Could I ask you one thing? What is the hardest week of the year here?' }
  ]
});

PBE4.scene('u13-13-7', {
  set: 'interview',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Nour. The notice at the Chamber — warehouse and logistics '
            + 'assistant. It says minimum two years in a similar role and '
            + 'candidates must be computer literate. I have driven for six years. '
            + 'That is not a similar role and I am not computer literate.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the rest of it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Responsible for goods in and goods out, checking quantities '
            + 'against the note, keeping the stock record, and liaising with '
            + 'drivers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fadi, you have done every one of those four things for six years. '
            + 'You have checked quantities against a note at the gate every day '
            + 'of your working life. The two years is in the advertisement '
            + 'because somebody has to write a number; the four jobs underneath '
            + 'are what they actually want.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And computer literate?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It means you can be taught the stock screen without somebody '
            + 'sitting with you for a month. You learned the new delivery notes '
            + 'in two days and then you taught Abu Yasser.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So what do I put in the first line?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The four things they listed, in their words, with your numbers in '
            + 'them. Make them do no work at all.' }
  ]
});

PBE4.scene('u13-13-7-pair', {
  set: 'interview',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I have no degree and I have never used accounting software. It '
            + 'says degree preferred and proficient in accounting software.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the duties.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Entering invoices, checking supplier statements, chasing late '
            + 'payments by telephone, preparing the monthly figures.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You have done three of those four for five years on paper and on a '
            + 'stock screen. Preferred is not required — it is there so they can '
            + 'choose between two people who are otherwise the same. And '
            + 'proficient in accounting software means they do not want to teach '
            + 'you what an invoice is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what do I put first?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Their four duties, in their words, with your numbers in them.' }
  ]
});

PBE4.scene('u13-13-7-b', {
  set: 'interview',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I am a counter assistant at a pharmacy in Latakia, and I have been '
            + 'there since 2021 — four years in January. I serve between eighty '
            + 'and a hundred and twenty people a day.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Before that I worked three years at my uncle\'s bakery, where I '
            + 'learned to count money accurately at five in the morning, which '
            + 'sounds small and is not.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'I want to do the same work where the customer comes back instead '
            + 'of passing through. That is me.' }
  ]
});
