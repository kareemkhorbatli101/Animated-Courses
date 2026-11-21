/* Unit 12 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u12-12-1', {
  set: 'guestroom',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Mr Tarabishi. Congratulations on the branch — and on doing it in '
            + 'the year everybody said not to.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Thank you, Khaled. Twelve years and you have never once said a '
            + 'thing like that to me.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Twelve years and you have never once opened a branch.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'That is fair.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And congratulations on the son. He asked me three questions in ten '
            + 'minutes and two of them I could not answer.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'He asks me the same two. His mother says he will be difficult; I '
            + 'say he will be rich.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Both, probably.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Both. Tell Nour she was right about the boxes, and tell her I said '
            + 'so. Young people should be told when they were right; everybody '
            + 'tells them when they were wrong.' }
  ]
});

PBE3.scene('u12-12-1-pair', {
  set: 'guestroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Rasha. Congratulations on the promotion — and on training Samir '
            + 'before anybody offered it to you.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you. Four years here and you have never said a thing like that to me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four years and you have never been promoted.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is fair.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And congratulations on doing it quietly. Half the office did not '
            + 'know you had applied.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Half the office still does not know. My mother says I am '
            + 'secretive; I say I am careful.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Both, probably.' }
  ]
});

PBE3.scene('u12-12-2', {
  set: 'guestroom',
  arr: 1,
  cast: {
    engineer: { rig: 'm-30s-a', name: 'Engineer', voice: 'en-ZA-LukeNeural', shirt: '#5f5f8a', shirt2: '#4b4b6e',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'greet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'engineer', cam: { shot: 'wide' },
      en: 'Nour, can I ask you something that is not about the order? I am '
            + 'here from Dubai for a week and I keep getting it wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ask.' },
    { who: 'engineer', cam: { shot: 'mid' },
      en: 'The tea. I drink one cup and then I want to leave and start '
            + 'working, and everybody looks at me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ah. It\'s polite to stay for the second cup. The first cup is the '
            + 'greeting. The second cup is the conversation — that\'s where the '
            + 'business actually happens.' },
    { who: 'engineer', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third is a long friendship or a difficult negotiation. You '
            + 'will know which.' },
    { who: 'engineer', cam: { shot: 'mid' },
      en: 'And arriving? In Dubai I arrive at the minute.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'For a company meeting, on time. For a shop or a home, ten minutes '
            + 'early is eager and twenty minutes late is normal — but not for Mr '
            + 'Ayoub, who was taught punctuality as a virtue and has never '
            + 'recovered.' },
    { who: 'engineer', cam: { shot: 'mid' },
      en: 'How do I know which is which?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You ask, as you just did. Nobody is ever offended by the question. '
            + 'People are offended by the guess.' }
  ]
});

PBE3.scene('u12-12-2-pair', {
  set: 'guestroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'greet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can I ask you something that is not about the work? I am here from '
            + 'Germany and I keep getting it wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ask.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The food. I eat everything I am given, and then I am given more, '
            + 'and I leave unable to walk.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ah. It\'s polite to leave a little. An empty plate means you are '
            + 'still hungry — that is what it says, whatever you meant.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I refuse at the start?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Refusing once is expected. Nobody hears it as a refusal; it means '
            + '"don\'t trouble yourself". If you mean it, you have to refuse '
            + 'twice, warmly.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how do I know when twice is enough?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It depends on the house. You ask, as you just did. Nobody is '
            + 'offended by the question.' }
  ]
});

PBE3.scene('u12-12-3', {
  set: 'guestroom',
  arr: 2,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Miss Mansour. The invoice says four hundred and twenty. We agreed '
            + 'three hundred and eighty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You\'re right, and I\'m sorry — that figure is mine, not the '
            + 'system\'s. I used the old price list.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'It is the second time this year somebody has done that to me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I understand why you telephoned instead of writing. Here is '
            + 'what I\'m doing: Nadia is cancelling that invoice now and sending '
            + 'the correct one today, three hundred and eighty, same reference, '
            + 'marked as a correction so your accountant can see what happened.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And if my accountant has already paid it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the difference comes back this week, not as credit on the '
            + 'next order. Money, back, to you.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is better than last time.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And one more thing, which is not an apology: the old price list '
            + 'comes off the wall this afternoon. It has been there since '
            + 'January, and that is why I reached for it.' }
  ]
});

PBE3.scene('u12-12-3-pair', {
  set: 'guestroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Samir. The same fault is back, three weeks after you repaired it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You\'re right, and I\'m sorry — I used the cheaper part, and that '
            + 'was my decision, not the supplier\'s.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the second time this year somebody has done that to me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I understand why you came in instead of telephoning. Here is '
            + 'what I\'m doing: it comes back this week, with the proper part, '
            + 'and you pay nothing — not for the part and not for the work.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if it fails again?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it is a different fault and I will say so, and you will not '
            + 'pay for that either until we know.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is better than last time.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And one more thing, which is not an apology: I don\'t use that '
            + 'part on that machine any more. Not for you and not for anybody.' }
  ]
});

PBE3.scene('u12-12-4', {
  set: 'guestroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, I\'m telephoning to say thank you, and that\'s all — '
            + 'there\'s no order in this call.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That is a strange telephone call. Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you for sending the sixty boxes on Tuesday morning. You put '
            + 'them on a lorry that was already loaded, which I know means '
            + 'somebody took something off.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Somebody did. It was mine, so it was easy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It arrived at two. The Homs lorry left at three. Mr Tarabishi '
            + 'opened his branch on Wednesday with our boxes on the shelves, and '
            + 'he does not know any of this happened.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Good. That is how it should be.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And thank you for telling me on Monday that you could, instead of '
            + 'leaving me to hope. I could plan a whole day because of one '
            + 'message.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'You are the only person who has ever thanked me for a message.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then that is wrong, and I am going to keep doing it. If there is '
            + 'ever a week when we can make something easier for you, tell me. It '
            + 'is not a favour — I would like to owe less.' }
  ]
});

PBE3.scene('u12-12-4-pair', {
  set: 'guestroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Umm Samer, I\'m telephoning to say thank you, and that\'s all — '
            + 'I\'m not going to ask you for anything.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a strange telephone call. Go on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you for taking the children to school for two weeks. You '
            + 'left your own house twenty minutes early every morning, which I '
            + 'know means you got up at six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I was going anyway.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You were going at twenty past seven. You went at ten to.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Hm.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'And thank you for never mentioning it. My son told me, in '
            + 'September, by accident.' }
  ]
});

PBE3.scene('u12-12-5', {
  set: 'guestroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'greet' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Khalil, I\'m sorry — Mr Ayoub is at the bank until eleven. '
            + 'Would you like to wait?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'I\'ll wait. I have nothing until twelve.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Would you like some tea?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'No, thank you. I\'ve just had one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Are you sure? It\'s already made.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Then yes. Thank you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And please sit in the small room, not out here — the counter is '
            + 'noisy and there\'s a window in there that opens.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'The small room. Thank you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One more thing: would you like me to telephone him? He can be back '
            + 'in twenty minutes if it can\'t wait.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'It can wait. But tell me — do you offer that to everybody, or did '
            + 'I look impatient?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You looked like a man who drove forty minutes. That is not '
            + 'impatience; that is forty minutes.' }
  ]
});

PBE3.scene('u12-12-5-pair', {
  set: 'guestroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'greet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mrs Darwish, I\'m sorry — the doctor is about thirty minutes '
            + 'behind. Would you like to wait?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'ll wait. I have nothing else today.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Would you like some water?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No, thank you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Are you sure? It\'s cold, and it\'s a warm room.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then yes. Thank you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And please sit over there, away from the door — it opens every two '
            + 'minutes and there\'s a draught.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'One more thing: would you like me to telephone whoever is '
            + 'collecting you, so they don\'t wait outside for half an hour?' }
  ]
});

PBE3.scene('u12-12-6', {
  set: 'guestroom',
  arr: 2,
  cast: {
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'tarabishi', cam: { shot: 'wide' },
      en: 'Well. We have talked for twenty minutes about forty boxes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We have talked for twenty minutes about a new branch, and four of '
            + 'them were boxes.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'That is true. You have learned to talk like Khaled Ayoub. Right — '
            + 'I must let you work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before you go: please give my regards to your son. Tell him the '
            + 'answer to his second question is that we don\'t know either, and '
            + 'that we have been not knowing it for twelve years.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'He will like that very much. And give my regards to Khaled — tell '
            + 'him I said he was right about the Tuesday delivery, and tell him I '
            + 'did not enjoy saying it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'ll tell him both halves.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Both halves. Goodbye, Nour. And — thank you for this year. You '
            + 'have made this easier than it was.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Goodbye, Mr Tarabishi. Eid Mubarak to you and the family.' }
  ]
});

PBE3.scene('u12-12-6-pair', {
  set: 'guestroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Well. We have talked for ten minutes about an order.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before we finish — I only heard today about your father. I am very sorry.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did not know him, and I am not going to pretend I did. But I '
            + 'know you took three weeks off in the spring and said nothing to '
            + 'anybody about why, and now I understand why.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a kinder thing to say than most of what I have heard.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I must let you work. Please give my condolences to your mother. '
            + 'And if there is a week when the order can wait, it can wait.' }
  ]
});

PBE3.scene('u12-12-7', {
  set: 'guestroom',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Nour. The Eid paper on the board. It says customers and suppliers. '
            + 'Does it mean the drivers as well, or is that just something people '
            + 'write?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It means you. Your name is on the bottom of the letter, Fadi. All '
            + 'seven of us are on it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And "and your families"? Everybody writes that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody writes it and here it means it. Look at the line after: '
            + 'children are not welcome; they are the point. Somebody wrote that '
            + 'on purpose. There will be more children than adults and Abu Yasser '
            + 'has already asked where the ball is.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Four children is a lot to bring to a company thing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four children is four more reasons they want you there. And read '
            + 'on: you don\'t have to reply, dress up or stay. Come for twenty '
            + 'minutes if that\'s what you have.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then what is the one thing they ask?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tell me by Monday how many. Not for the invitation — for the food.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Seven of us. I\'ll tell you on Sunday.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Seven. I\'ll write it down now, before I forget — which is the '
            + 'other thing I\'ve learned this year.' }
  ]
});

PBE3.scene('u12-12-7-b', {
  set: 'guestroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'greet' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'note' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Khalil, I\'m sorry — Mr Ayoub is at the bank until eleven. '
            + 'Would you like to wait?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'I\'ll wait.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Would you like some tea?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'No, thank you. I\'ve just had one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Are you sure? It\'s already made.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Then yes. Thank you.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And please sit in the small room — the counter is noisy. Would you '
            + 'like me to telephone him?' }
  ]
});
