/* Unit 5 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u5-5-1', {
  set: 'paydesk',
  arr: 0,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Good morning. How much are the small boxes?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The small ones are eight hundred pounds each.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Eight hundred. And if I take a hundred?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'For a hundred it\'s seven hundred each — seventy thousand for the hundred.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Seventy thousand. How much does the tape cost?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tape is two thousand five hundred a roll. There\'s no discount on tape.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And the plastic wrap?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m sorry, we\'ve got none today. It comes on Tuesday. Shall I '
            + 'write your number?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Please. And is the price list free?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Free of charge. Here you are — but that one is retail. If you have '
            + 'a shop, ask for the wholesale list.' }
  ]
});

PBE3.scene('u5-5-1-pair', {
  set: 'paydesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. How much are the folders?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The folders are one thousand two hundred each.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twelve hundred. And if I take fifty?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The same, I\'m afraid — there\'s no discount on folders.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How much does the paper cost?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Paper is nine thousand a packet. For ten packets or more it\'s '
            + 'eight thousand.' }
  ]
});

PBE3.scene('u5-5-2', {
  set: 'paydesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'read', hold: 'note' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, I have two offers for the small boxes. Aleppo and Homs.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Tell me both.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Shamsi in Aleppo: six hundred and fifty each for a thousand. '
            + 'Khalil in Homs: seven hundred and twenty.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So Aleppo is cheaper. How much cheaper, for a thousand?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Seventy thousand cheaper.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the delivery?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s the thing. Homs is nearer — two days. Aleppo is six days, '
            + 'and the road is slower in winter.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Six days. And if we are short on a Tuesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then Homs is better, even if it\'s more expensive. Khalil also '
            + 'gives thirty days; Shamsi wants half in advance.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then it isn\'t really cheaper, is it? Write me both, side by side.' }
  ]
});

PBE3.scene('u5-5-2-pair', {
  set: 'paydesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have two offers for the van. A and B.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tell me both.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A: forty-two million, a hundred and eighty thousand kilometres, '
            + 'six years old. B: fifty-one million, ninety thousand kilometres, '
            + 'three years old.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So A is cheaper. How much cheaper?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine million cheaper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the parts?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s the thing. A is diesel and the parts are easy here. B is '
            + 'petrol and the parts come from abroad.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it isn\'t really cheaper, is it?' }
  ]
});

PBE3.scene('u5-5-3', {
  set: 'paydesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Three quotes for the invoice books. Which is the cheapest?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Zahra Press — a hundred and ten thousand. Hamdan is a hundred and '
            + 'thirty-five. Noor Printing is a hundred and sixty.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So Zahra is the cheapest by a long way.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is. But it\'s also the slowest — ten days. Hamdan is the '
            + 'fastest: three days, and they\'re the nearest, in Jaramana.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the most expensive one?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Noor does the best paper. But we don\'t need the best paper for an '
            + 'invoice book.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'True. So?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hamdan. Not the cheapest, but the best for us: three days, round '
            + 'the corner, and we know them.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'The cheapest is not always the best. Write that on the wall.' }
  ]
});

PBE3.scene('u5-5-3-pair', {
  set: 'paydesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Three quotes for the wall. Hamdi, Said and Jamil.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is the cheapest?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Hamdi — nine hundred thousand. He\'s the cheapest by a long way.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the fastest?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Jamil, five days. But Said is the nearest, and he did my neighbour\'s wall.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the most expensive?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Jamil does the best finish. But we don\'t need the best finish for '
            + 'a garden wall.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So which one?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Said. Not the cheapest, but the best for us — I can see his work '
            + 'from my window.' }
  ]
});

PBE3.scene('u5-5-4', {
  set: 'paydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, about the wrap. Nine thousand a roll is too expensive '
            + 'for this order.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'It\'s the wide one, Nour. The narrow is six.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. But the narrow isn\'t strong enough for the heavy pallets '
            + '— we tried it in March.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That\'s true. How many rolls?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twelve now, and about twelve every month after that.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Twelve a month is enough to give you a better price. Eight '
            + 'thousand two hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eight thousand two hundred. That\'s better, but it isn\'t quite '
            + 'enough. Eight would make it work.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Eight for twelve rolls every month, paid in thirty days — not sixty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thirty days. Agreed. Thank you, Ms Shamsi.' },
    { who: 'shamsi', cam: { shot: 'close' },
      en: 'You argue like Abu Yasser. Write it in an email so I remember what '
            + 'I agreed to.' }
  ]
});

PBE3.scene('u5-5-4-pair', {
  set: 'paydesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'About the car. Twenty-five thousand a day is too expensive for '
            + 'every morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s the normal price, and the petrol is mine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I know. But a service isn\'t fast enough for me — I must be at the '
            + 'shop before seven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s true. How many days?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty days a month, every month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty days is enough to give you a better price. Twenty-two thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s better, but it isn\'t quite enough. Twenty would make it work.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Twenty, if you pay on Sunday for the whole week.' }
  ]
});

PBE3.scene('u5-5-5', {
  set: 'paydesk',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'read', hold: 'note' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Nour, this invoice. Is it ours or theirs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me see. Shamsi Packaging, twelve rolls… that\'s from them, so '
            + 'it\'s theirs — we pay it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'But it\'s in our outgoing file, with ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then somebody filed it wrong. Ours are the ones with the blue '
            + 'header; theirs are plain.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And this one? Hamdan Printing, five hundred invoice books.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Blue header — that\'s ours. We sold them the folders last month.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'No, Nour. Look at the bottom. That\'s their address, not ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You\'re right. Somebody printed it on our paper. That\'s my '
            + 'mistake — I gave them a blue sheet to copy the layout.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then the paper isn\'t the test. The address is.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The address is. I\'ll tell Hala before she files anything else.' }
  ]
});

PBE3.scene('u5-5-5-pair', {
  set: 'paydesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This folder. Is it ours or theirs?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Let me see. Green — that\'s from the other company, so it\'s theirs.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'But it\'s in our cupboard with ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then somebody put it back wrong. Ours are blue; theirs are green.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And this one?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Blue. That\'s ours.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No — look at the extension number inside. That\'s 305, not 212.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You\'re right. That\'s my mistake. Then the colour isn\'t the '
            + 'test. The extension is.' }
  ]
});

PBE3.scene('u5-5-6', {
  set: 'paydesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'So that\'s two cartons of small bags, one box of labels, six rolls '
            + 'of tape and two rolls of string. The total is a hundred and '
            + 'ninety-two thousand.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'A hundred and ninety-two. Here — two hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. A hundred and ninety-two thousand out of two hundred '
            + 'thousand… that\'s eight thousand change. Five, six, seven, eight.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Thank you. And this paper?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s your receipt. These two lines at the top are the order '
            + 'number and the date. This line is the total, and this one says VAT '
            + 'is included.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And those small words at the bottom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Those say that if anything is wrong, you telephone us within three '
            + 'days and give the order number.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Three days. And is this the invoice?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No — this is the receipt, for cash at the counter. The invoice is '
            + 'the paper Nadia sends to shops that pay in thirty days. You don\'t '
            + 'need one.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Good. Keep the receipt book safe, my daughter. That book is your memory.' }
  ]
});

PBE3.scene('u5-5-6-pair', {
  set: 'paydesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So that\'s the tablets and the cream. The total is forty-seven '
            + 'thousand five hundred.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Forty-seven five. Here — fifty.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. Forty-seven five out of fifty… that\'s two thousand '
            + 'five hundred change. Two, two five.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thank you. And this paper?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s your receipt. These lines are the date and the two items. '
            + 'This line is the total.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And those small words at the bottom?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Those say that medicines can\'t be returned, so please check the '
            + 'box before you leave.' }
  ]
});

PBE3.scene('u5-5-7', {
  set: 'paydesk',
  arr: 0,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Nour, this invoice is wrong. I paid. I have the paper here.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Let me look at both. Ah — these are two different papers, Mr Khalil.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Two? They have the same number.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes, and that is why they look the same. This one is the receipt — '
            + 'it says you paid a hundred and ninety-two thousand in cash on the '
            + 'seventh.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And the other?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That one is the invoice for the second order, the one on the '
            + 'twelfth. It has the same reference because it is the same customer '
            + 'account, but it is a different order.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'So I owe money again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You owe the second one — three hundred and ten thousand, due at '
            + 'the end of the month. The first one is paid and finished.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Why do they look the same?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'They shouldn\'t. I\'ll ask Nadia to put PAID across the receipt '
            + 'from now on. You were right to come in.' }
  ]
});

PBE3.scene('u5-5-7-b', {
  set: 'paydesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'So that\'s four cartons of small bags and two boxes of labels. The '
            + 'total is a hundred and forty thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Here — a hundred and fifty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A hundred and forty out of a hundred and fifty… that\'s ten thousand change.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thank you. And the paper?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That\'s your receipt — cash, VAT included. If anything is wrong, '
            + 'telephone us within three days.' }
  ]
});
