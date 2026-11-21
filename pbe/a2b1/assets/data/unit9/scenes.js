/* Unit 9 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u9-9-1', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, I\'m writing the job description. Not for you — for the '
            + 'person after you. What exactly do you do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s a bigger question than it sounds.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It always is. Start with what is yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m responsible for the orders — from the telephone call to the '
            + 'delivery note. I\'m responsible for the diary, the post, and the '
            + 'stock card now.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the counter?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I look after the counter when Hala isn\'t there, but I\'m not in '
            + 'charge of it. That\'s different.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say the difference.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If the counter money is wrong, Hala finds it and tells Nadia. If '
            + 'an order is wrong, nobody finds it except me. That\'s what '
            + 'responsible means.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Write that sentence down exactly as you said it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And I help with the stock count twice a month. I don\'t decide '
            + 'anything there — Abu Yasser does.' }
  ]
});

PBE3.scene('u9-9-1-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I\'m writing the job description. What exactly do you do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s a bigger question than it sounds.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Start with what is yours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'m responsible for the shelves — from the order to the date on '
            + 'the box. I\'m responsible for the wholesaler order and the fridge '
            + 'temperatures.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the till?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I look after the till when the pharmacist is out, but I\'m not in '
            + 'charge of it. That\'s different.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Say the difference.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'If the till is short, she finds it that evening. If a box goes out '
            + 'of date on my shelf, nobody finds it except me — until a customer '
            + 'does.' }
  ]
});

PBE3.scene('u9-9-2', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Nour, why must I sign the book? Everybody knows I\'m here — they can see me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They can see you. The fire list can\'t.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'The fire list?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If the building is emptied, Abu Yasser takes the book to the gate '
            + 'and reads the names. If your name isn\'t in it, nobody looks for '
            + 'you. If it is in it and you went home at two, somebody goes back '
            + 'into the building to look for you.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'So it works in both directions.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Both directions. That\'s why you sign out as well, and why it '
            + 'matters more than it looks.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Has it ever happened?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In 2019 there was smoke in the store room — a cable, not a fire. '
            + 'Everybody went to the gate. Two names in the book weren\'t there, '
            + 'and Abu Yasser went back in for them.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And were they in the building?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'They were in the café across the street. He went into smoke for '
            + 'two men drinking tea. He has never said one word to them about it, '
            + 'and everybody signs out now.' }
  ]
});

PBE3.scene('u9-9-2-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Why must I write the time on every sample? Everybody knows when I took it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You know. The laboratory doesn\'t.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The laboratory?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If a sample is taken at eight and tested at four, some of the '
            + 'numbers change. They need the time to read the result, not to '
            + 'check on you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So it works in both directions.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Both directions. That\'s why we write it even when we take it '
            + 'straight through.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Has it ever happened?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'In 2021 a woman was treated for something she did not have, for '
            + 'three weeks, because a sample sat in a warm room and nobody knew '
            + 'how long.' }
  ]
});

PBE3.scene('u9-9-3', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Nour, about Saturday. What time do I have to come?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You don\'t have to come on Saturday. We\'re closed.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'But Abu Yasser was here last Saturday. I saw the gate open.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He comes in sometimes when a lorry is coming from the coast. He '
            + 'doesn\'t have to. Nobody asks him and nobody pays him extra. He '
            + 'does it because he doesn\'t trust Saturday drivers.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And the uniform? I bought a dark skirt.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You don\'t have to wear anything particular. Nothing is written. '
            + 'But at the counter people look at you before they listen to you, '
            + 'so most of us dress for that. Your own choice.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'All right. Anything I have to do that I don\'t know about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One thing. If you\'re ill, you have to telephone before eight — '
            + 'and to a person, not a message. Mr Ayoub answers from half past '
            + 'seven.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Why to a person?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Because a message is read at ten, and by ten somebody has opened '
            + 'the counter alone and the morning is already difficult.' }
  ]
});

PBE3.scene('u9-9-3-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'About the staff meal. What time do I have to be here?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You don\'t have to stay for the staff meal. It\'s after the shift.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But everybody was there last night. I saw them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They were. They don\'t have to be. Nobody asks them and nobody '
            + 'pays them. They stay because the food is better at eleven than at '
            + 'six.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the knives? Should I buy my own?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You don\'t have to buy anything. Nothing is written. But most '
            + 'cooks here have one knife of their own, because the shared ones '
            + 'are blunt by Thursday. Your own choice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Anything I have to do that I don\'t know about?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'One thing. You have to tell the kitchen before you leave the '
            + 'building — even for five minutes, even for bread.' }
  ]
});

PBE3.scene('u9-9-4', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, is it OK if I leave at three on Wednesday? I have the clinic.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Of course. Is everything all right?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing serious — it\'s been in the diary since March. I\'ll '
            + 'finish the orders before I go, and Hala can take the counter from '
            + 'two.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Does Hala know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not yet. I wanted to ask you first.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That\'s the right order. Ask her today, not on Wednesday morning. '
            + 'And one change: don\'t leave at three. Leave at half past two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Half past two?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The clinic is in Mezzeh and you\'ll walk. If you leave at three '
            + 'you will run, and you will spend Wednesday morning worrying about '
            + 'three o\'clock instead of working.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. Half past two.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'And Nour — you don\'t have to tell me it isn\'t serious. "I have '
            + 'an appointment" is a complete sentence here.' }
  ]
});

PBE3.scene('u9-9-4-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Is it OK if I take Thursday off? My brother gets his results.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Of course. Is everything all right?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing serious. I\'ll finish the week\'s orders on Wednesday, and '
            + 'Samir can open.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does Samir know?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not yet. I wanted to ask you first.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s the right order. And one change: take Wednesday afternoon as well.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Wednesday afternoon?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You will be useless on Wednesday afternoon and we both know it. Go '
            + 'at one and be where you are needed.' }
  ]
});

PBE3.scene('u9-9-5', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good morning. Nour speaking.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good morning. Can I speak to Mr Ayoub?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m afraid he\'s at the bank until eleven. Can I take a message?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Yes. It\'s Samer Haddad from Haddad Transport.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Haddad from Haddad Transport. Can I ask what it\'s about?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'The lorry hire for May. We can do the two Aleppo runs but not the '
            + 'Homs one, and he needs to know before he commits to the customer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two Aleppo runs yes, Homs no, and he should know before he '
            + 'promises the customer. Can I have your number?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Zero nine four four, three one eight, two six zero.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Zero nine four four, three one eight, two six zero. Let me repeat '
            + 'the whole message: Mr Samer Haddad, Haddad Transport, about the '
            + 'May lorry hire — two Aleppo runs possible, Homs not possible. '
            + 'Please telephone before you commit. Zero nine four four three one '
            + 'eight two six zero.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'That\'s it exactly. You\'re the one who repeats things.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I am. He\'ll telephone you before twelve.' }
  ]
});

PBE3.scene('u9-9-5-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. Can I speak to the foreman?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'m afraid he\'s on site until two. Can I take a message?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. It\'s Leila Jabr from Jabr Glass.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Mrs Jabr from Jabr Glass. Can I ask what it\'s about?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The order for the shopfront. The 6 mm is ready but the 4 mm is '
            + 'three weeks away. I need to know today whether to send the 6 mm on '
            + 'its own.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '6 mm ready, 4 mm three weeks, and you need an answer today about '
            + 'sending the 6 mm alone. Can I have your number?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Zero nine three three, six one two, four zero four.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Zero nine three three, six one two, four zero four. Let me repeat '
            + 'the whole message.' }
  ]
});

PBE3.scene('u9-9-6', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nadia, can you read this before I send it? It\'s to the head '
            + 'office about the stock card.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Read it to me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '"Dear colleagues, I hope this email finds you well. I am writing '
            + 'to inform you that further to our recent discussions we have '
            + 'implemented a revised stock card procedure…"' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Stop. What do you want them to do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Approve it, and send me the new form number.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then that is the first line. Not the fourth paragraph — the first line.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'But it sounds abrupt.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It sounds clear. Cut "I hope this email finds you well" — nobody '
            + 'has ever been helped by that sentence. Keep "as discussed", it '
            + 'does real work: it reminds them this isn\'t new.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And "thanks in advance"?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Cut it. It thanks somebody for something they haven\'t agreed to '
            + 'do. People notice, even when they don\'t say so. Write "thank you" '
            + 'at the end, when they\'ve done it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: what I want, why, by when, attached, kind regards.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Four lines. And they\'ll answer today instead of Thursday.' }
  ]
});

PBE3.scene('u9-9-6-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can you read this before I send it? It\'s to the landlord about '
            + 'the water tank.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it to me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"Dear Mr Nasser, I hope you and your family are well. I am sorry '
            + 'to trouble you again, and I know you are busy, but I wanted to '
            + 'mention, if it is not inconvenient…"' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. What do you want him to do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Replace the water tank before the summer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is the first line.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But it sounds demanding.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It sounds clear. Cut the two apologies. Keep "again" — it does '
            + 'real work: it tells him this is the third time.' }
  ]
});

PBE3.scene('u9-9-7', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Nour, the head office sent two pages of staff rules. There are '
            + 'words I don\'t know and one of them is "disciplinary". Should I be '
            + 'frightened?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Let me go through it and tell you which parts are about you.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Please.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Most of it is about leave and hours and you already know those. '
            + 'The word "disciplinary" is there because every company has to '
            + 'write what happens if somebody does something serious. It isn\'t '
            + 'about you and it isn\'t about anything that has happened.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And "confidential"?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That one is about you, and it\'s simple: what customers tell us '
            + 'stays in this building. Their prices, their telephone numbers, '
            + 'what they buy, how much they owe. Not to your family, not to a '
            + 'friend who works at another company, not in a café.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Even what they buy?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Especially that. A competitor who knows what Tarabishi orders '
            + 'knows what to offer him.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And if I\'m not sure?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then it\'s confidential. That\'s the one thing to remember from two pages.' }
  ]
});

PBE3.scene('u9-9-7-b', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading, good afternoon. Nour speaking.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Good afternoon. Can I speak to Nadia?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m afraid she\'s at the bank until three. Can I take a message?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Yes — it\'s Leila Jabr from Jabr Glass. It\'s about invoice '
            + '0501-3; we paid it on Tuesday and she has sent a reminder.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Invoice 0501-3, paid on Tuesday. Can I have your number?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Zero nine three three, six one two, four zero four.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Zero nine three three, six one two, four zero four. She\'ll '
            + 'telephone you before five.' }
  ]
});
