/* Unit 3 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u3-3-1', {
  set: 'warehouse',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, the head office wants a list of what we have here. Can you do it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of course. Let me look. There are six desks and six chairs.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Seven chairs. There\'s one for visitors, by the window.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Seven. And there are two filing cabinets and one cupboard.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the machines?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There\'s one printer. There isn\'t a photocopier — we use the one '
            + 'downstairs.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Write that. The head office always asks why.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And there are two telephones, one noticeboard, and a small fridge.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Is there a scanner?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'No, there isn\'t. That\'s the next question from the head office.' }
  ]
});

PBE3.scene('u3-3-1-pair', {
  set: 'warehouse',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'How many shelves are there?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are twenty-four. And there\'s one forklift.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is there a computer?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No, there isn\'t. We use the one in the office.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And windows?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'There are two trolleys and a ladder, but there aren\'t any windows.' }
  ]
});

PBE3.scene('u3-3-2', {
  set: 'warehouse',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, where\'s the Homs file? It isn\'t on my desk.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It should be in the filing cabinet, in the second drawer.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I looked. The second drawer has Hama and Homs… no, only Hama.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then Nadia has it. She took the April invoices yesterday.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Her desk is empty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Look under the tray, on the left. She puts things under the tray.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Ah. Here it is — between the tray and the keyboard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m sorry. I\'ll put it back in the drawer this evening.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Don\'t be sorry. But write the room and the drawer on the front, '
            + 'please. Then nobody looks for twenty minutes.' }
  ]
});

PBE3.scene('u3-3-2-pair', {
  set: 'warehouse',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Where\'s the stapler? It isn\'t on my desk.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It should be in the top drawer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I looked. It isn\'t there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then look on the printer, on the right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Here it is — between the printer and the paper.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I\'ll put it back in the drawer this evening.' }
  ]
});

PBE3.scene('u3-3-3', {
  set: 'warehouse',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, have we got any plastic wrap? The Homs order goes tomorrow.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Wrap? We haven\'t got any. The last roll finished on Sunday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'None at all?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'None at all. There\'s some tape, and there are some cardboard '
            + 'corners, but no wrap.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And boxes?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Boxes we\'ve got. Forty big ones and about a hundred small ones. '
            + 'Boxes are not the problem.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I telephone Ms Shamsi in Aleppo.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Telephone her today. She sends on Tuesday, so if you call '
            + 'tomorrow, we wait a week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Today, then. How many rolls shall I ask for?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Twelve. And ask for the wide one, not the narrow one.' }
  ]
});

PBE3.scene('u3-3-3-pair', {
  set: 'warehouse',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Have we got any printer ink?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We haven\'t got any. The last cartridge finished on Thursday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None at all?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'None at all. There\'s some paper — six packets — and there are '
            + 'some envelopes, but no ink.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And pens?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Pens we\'ve got. Pens are not the problem.' }
  ]
});

PBE3.scene('u3-3-4', {
  set: 'warehouse',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, can we buy a new printer? This one is very old.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Old is not a reason. Is it too slow?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It isn\'t too slow for letters. But it\'s too slow for the '
            + 'delivery notes — forty pages take nine minutes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Nine minutes. And it\'s noisy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Very noisy. Nadia can\'t use the telephone when it works.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That\'s a better reason than old. What about the new shelves in '
            + 'the warehouse? Are they good?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They\'re very strong, Abu Yasser says. But they\'re too high for '
            + 'him — he needs the ladder for the top one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then we move the heavy things down and the light things up. That '
            + 'costs nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the printer?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Write me the nine minutes and the telephone on one page. I\'ll ask '
            + 'the head office.' }
  ]
});

PBE3.scene('u3-3-4-pair', {
  set: 'warehouse',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Can we buy a new trolley? This one is very noisy.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Noisy is not a reason. Is it too heavy?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It isn\'t too heavy for two people. But it\'s too heavy for one, '
            + 'and one wheel is broken.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That\'s a better reason. What about the second trolley?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It\'s very old, but it\'s not too slow.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then we repair the wheel. That costs nothing.' }
  ]
});

PBE3.scene('u3-3-5', {
  set: 'warehouse',
  arr: 1,
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Excuse me. I\'ve got boxes for Sham Trading. Where do I go?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Not here — this is the trade counter. Go out of this door and turn right.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Right. And then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Walk past the small window and go through the gate into the yard.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Through the gate. Can I bring the lorry in?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes, but don\'t park in front of the gate — the forklift uses it all day.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Where, then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In the yard, on the left, next to the wall. The loading door is '
            + 'the big green one at the back.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'The big green door at the back. And who do I ask for?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Ask for Abu Yasser. He\'s there until half past four.' }
  ]
});

PBE3.scene('u3-3-5-pair', {
  set: 'warehouse',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Excuse me. I\'ve got a delivery for the office. Where do I go?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not here — this is the trade counter. Go through the glass door '
            + 'and along the corridor.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Along the corridor. And then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Take the stairs or the lift to the second floor, then turn left. '
            + 'It\'s the second door.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Can I take the trolley in the lift?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No — don\'t use the lift with a trolley. Use the stairs, or leave '
            + 'it downstairs.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And who do I ask for?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Ask for Nour. She\'s there until four.' }
  ]
});

PBE3.scene('u3-3-6', {
  set: 'warehouse',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, I need twelve rolls of the wide wrap, please. And… the '
            + 'things for the corners.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'The corners?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'m sorry, I don\'t know the word. They\'re a kind of card. You '
            + 'put them on the corner of the box so the strap doesn\'t cut it.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Ah — edge protectors. They\'re made of pressed cardboard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Edge protectors. Thank you. How do you spell that?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'E-D-G-E, then protectors, P-R-O-T-E-C-T-O-R-S. How many?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two boxes. And is the wide wrap the same plastic as the narrow one?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'The same plastic, yes, but it\'s thicker. It\'s better for the '
            + 'heavy pallets.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then the wide one. Thank you, Ms Shamsi.' }
  ]
});

PBE3.scene('u3-3-6-pair', {
  set: 'warehouse',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I need two boxes of A4 paper, please. And… the other thing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sorry — what exactly?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I don\'t know the word. It\'s a kind of clip. It\'s made of metal, '
            + 'black, with two handles. You use it to hold a big pile of paper '
            + 'together.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ah — a bulldog clip.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A bulldog clip. How do you spell that?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'B-U-L-L-D-O-G, then clip. How many?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'A box of twenty, please.' }
  ]
});

PBE3.scene('u3-3-7', {
  set: 'warehouse',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, they put two new papers by the loading door. A drawing and a '
            + 'lot of small writing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The drawing is the floor plan. The writing is the safety notice.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The drawing first. What is it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s the warehouse from above. The loading door is the green one '
            + 'at the back; the shelves are the long grey lines; the forklift '
            + 'area is the yellow square.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And the red arrow?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s the fire exit. It\'s the small door between the office '
            + 'stairs and the store room.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That door has three pallets in front of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s what the notice says. It says nothing must be in front of '
            + 'the fire exit, and nothing in the corridor — not even for one '
            + 'hour.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Not even for one hour. Good. Anything else?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'One more thing: the yellow square is for the forklift only. Nobody '
            + 'walks there.' }
  ]
});

PBE3.scene('u3-3-7-b', {
  set: 'warehouse',
  arr: 0,
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Excuse me, where do I take the boxes?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go out of this door and turn right.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Right. And then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Walk past the small window and go through the grey gate into the yard.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Where do I park?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'On the left, next to the wall. Then ask for Abu Yasser at the green door.' }
  ]
});
