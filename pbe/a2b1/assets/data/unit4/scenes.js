/* Unit 4 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u4-4-1', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, I\'m writing the stock list. Tape?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Thirty rolls. Not thirty tapes — thirty rolls of tape.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thirty rolls. And paper?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Paper you count in packets. Six packets. Write six packets, not six papers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Six packets. Why not six papers?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because a paper is one sheet. If the head office reads six papers, '
            + 'they send six sheets.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I understand. Boxes?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Forty big, about a hundred small. And two cartons of gloves — '
            + 'twelve pairs in each carton.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two cartons. A dozen pairs each. And the wrap?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'No wrap. Write nothing in the box — write none. Nothing looks like '
            + 'you forgot.' }
  ]
});

PBE3.scene('u4-4-1-pair', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I\'m writing the stock list. Ink?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two cartridges. Not two inks — two cartridges of ink.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two cartridges. And paper?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Paper you count in packets. Six packets.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And staples?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'None. Write none, not nothing.' }
  ]
});

PBE3.scene('u4-4-2', {
  set: 'orderdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, the Homs order is big. How many boxes have we got?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Plenty of boxes — forty big and a hundred small.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And how much tape?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thirty rolls. That\'s enough for this order and the next one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. How many pairs of gloves?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twenty-four. Two cartons.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That isn\'t many for a month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No, but we don\'t use many in the winter. In the summer we use a lot.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And paper? Nadia says there isn\'t much.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Six packets, and the minimum is ten. It\'s on the reorder list.' }
  ]
});

PBE3.scene('u4-4-2-pair', {
  set: 'orderdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The wedding is big. How many chairs have we got?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Plenty of chairs — two hundred and sixty.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how much water?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Forty boxes. That\'s enough for two hundred people.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How many plates?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'A hundred and eighty. That isn\'t many for two hundred guests.' }
  ]
});

PBE3.scene('u4-4-3', {
  set: 'orderdesk',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour. Bad news on a Thursday — the worst day for bad news.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The small boxes. I counted properly, like I said. There aren\'t a '
            + 'hundred. There are nineteen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nineteen? But the card says about a hundred.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The card says about. That\'s why I don\'t like about. Somebody '
            + 'took four pallets for the Hama job and wrote nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the Homs order needs sixty small boxes on Tuesday.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It does. So we\'ve got nineteen and we need sixty. That\'s forty-one short.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'ll telephone Ms Shamsi now. She sends on Tuesday — if I call '
            + 'tomorrow we get them next week.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Call now. And from today, nobody takes a pallet without writing it '
            + 'on the card. Nobody.' }
  ]
});

PBE3.scene('u4-4-3-pair', {
  set: 'orderdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Bad news. The flour. I counted properly. There aren\'t twelve '
            + 'sacks. There are three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three? But the card says twelve.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Somebody took nine for the Eid order and wrote nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And we need nine for Saturday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So we\'ve got three and we need nine. That\'s six short.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I\'ll telephone the mill now. From today, nobody takes a sack '
            + 'without writing it on the card.' }
  ]
});

PBE3.scene('u4-4-4', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Nour, show me the order. What happens first?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'First the customer telephones, or comes to the counter. I write '
            + 'the order on the form.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And the number on the top?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s the reference number. I give it one straight away — then '
            + 'everybody can find it.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the form goes to Abu Yasser. He checks the stock list and '
            + 'ticks what is in stock.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'And if something isn\'t in stock?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He writes it on the reorder list the same day. After that the form '
            + 'comes back to me and I telephone the customer.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'When does Mr Ayoub sign?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Only over five hundred thousand. Finally the warehouse packs it '
            + 'and Nadia sends the invoice.' }
  ]
});

PBE3.scene('u4-4-4-pair', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Show me a delivery. What happens first?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'First the driver rings at the gate. Abu Yasser goes out to him.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then he counts the boxes at the gate, not inside. He signs the '
            + 'driver\'s paper.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if a box is missing?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If a box is missing, he writes it on the paper before he signs — '
            + 'the same minute. After that the boxes go on the shelves.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'When does the office know?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Only when the numbers are on the stock card. Finally Nour tells accounts.' }
  ]
});

PBE3.scene('u4-4-5', {
  set: 'orderdesk',
  arr: 1,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'Shamsi Packaging, good morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good morning, Ms Shamsi. Nour Mansour from Sham Trading in '
            + 'Damascus. Can I place an order, please?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Of course, Nour. Go ahead.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'d like twelve rolls of the wide plastic wrap, ten packets of A4 '
            + 'paper and four cartons of gloves.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Twelve wide wrap, ten A4, four cartons of gloves. Which size gloves?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Large, please. And sixty small boxes — that one is urgent.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Sixty small boxes. Six-zero?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Six-zero, yes. Sixty.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Good. The reference is S-four-one-nine. The total is three hundred '
            + 'and forty thousand. It leaves here Tuesday morning and reaches you '
            + 'Tuesday afternoon.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'S-419, three hundred and forty thousand, Tuesday afternoon. Thank '
            + 'you, Ms Shamsi.' }
  ]
});

PBE3.scene('u4-4-5-pair', {
  set: 'orderdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning. Rasha Hamdan from Hamdan Stores. Can I place an order, please?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Of course. Go ahead.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I\'d like two thousand invoice forms, five hundred business cards '
            + 'and fifty folders with our name on them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two thousand forms, five hundred cards, fifty folders. Which colour forms?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'White, please. And the cards are urgent — I need them for Sunday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The reference is P-two-two-seven. The total is one hundred and ten '
            + 'thousand. The cards reach you Saturday; the rest on Monday.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'P-227, one hundred and ten thousand, cards Saturday, the rest '
            + 'Monday. Thank you.' }
  ]
});

PBE3.scene('u4-4-6', {
  set: 'orderdesk',
  arr: 2,
  cast: {
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'tarabishi', cam: { shot: 'wide' },
      en: 'So: two cartons of the small bags, one box of labels, and the usual tape.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two cartons of small bags, one box of labels, and six rolls of '
            + 'tape. Is that everything?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'That\'s everything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Have I missed anything from last month? You usually take string.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Ah — string. Yes. Two of the big ones. You see, this is why I come '
            + 'here and not to the other place.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two big rolls of string. Anything else at all?' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'No, that\'s all. How much is it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One moment. The total is one hundred and ninety-two thousand.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And the reference, for when I telephone?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Zero-seven-zero-four, dash two. Shall I read the whole order back?' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Read it back. My memory is not what it was.' }
  ]
});

PBE3.scene('u4-4-6-pair', {
  set: 'orderdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So: four kilos of coffee, two sacks of sugar and a hundred paper '
            + 'cups. Is that everything?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s everything.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Have I missed anything from last time? You usually take the small spoons.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ah — the spoons. Yes. A thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A thousand small spoons. Anything else at all?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No, that\'s all. How much is it?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'One moment. The total is six hundred and twenty thousand. Shall I '
            + 'read the whole order back?' }
  ]
});

PBE3.scene('u4-4-7', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, this form. Numbers everywhere, small letters, three columns. '
            + 'What must I send on Tuesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s order 0411-1, for Homs. I\'ll tell you only what you pack.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Only what I pack. Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sixty small boxes, ten packets of A4 paper, and four cartons of '
            + 'gloves — large.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Sixty, ten, four. And the wrap in the last line?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Don\'t send the wrap. The wrap comes to us from Aleppo on Tuesday '
            + '— it\'s on the same page, but it\'s the reorder list, not the '
            + 'order.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two lists on one page. That is how mistakes are made.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know. The order has the reference at the top; the reorder list '
            + 'has no reference.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So: reference at the top, I pack it. No reference, it is coming to me.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Exactly that. And the gloves are large, not medium — that is the '
            + 'line people get wrong.' }
  ]
});

PBE3.scene('u4-4-7-b', {
  set: 'orderdesk',
  arr: 0,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Four cartons of the small bags and two boxes of labels, please.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four cartons of small bags, two boxes of labels. Is that everything?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That\'s everything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Have I missed anything? You usually take tape.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Ah — six rolls of tape. Yes.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Six rolls of tape. The total is one hundred and forty thousand. '
            + 'The reference is 0708-1.' }
  ]
});
