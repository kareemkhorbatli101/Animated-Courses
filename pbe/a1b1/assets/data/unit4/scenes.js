/* Unit 4 — the acted dialogues. Every line is the book's own. */
PBE1.scene('u4-4-1', {
  set: 'counter',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Ammar. The small box of labels. Where is it?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'On the shelf?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Not on the shelf. I looked.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'In the big box?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Not in the big box. Look under the bench.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Under the bench. Yes. Here it is.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Next to the bench there is a ladder. Put the box on the top shelf.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'On the top shelf. Behind the paper?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Not behind the paper. In front of it. So the next man can see it.' }
  ]
});

PBE1.scene('u4-4-1-pair', {
  set: 'counter',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The box of labels. Where is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On the shelf?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. I looked.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In the big box?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Look under the bench.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Yes. Here it is.' }
  ]
});

PBE1.scene('u4-4-2', {
  set: 'counter',
  arr: 1,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Ammar. The cartons from Monday. Row three, shelf two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Row three. Which one is row three?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'From the door. One, two, three. The third row.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And shelf two?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Four shelves in a row. Shelf one is the bottom.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The bottom? Not the top?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The bottom. Shelf one is the bottom, shelf four is the top. Everybody asks.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Row three, shelf two. The second one up.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'The second one up. Write it on the sheet like that.' }
  ]
});

PBE1.scene('u4-4-2-pair', {
  set: 'counter',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The cartons. Row three, shelf two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Row three. Which one is row three?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'From the door. One, two, three.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And shelf two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Shelf one is the bottom.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Row three, shelf two. The second one up.' }
  ]
});

PBE1.scene('u4-4-3', {
  set: 'counter',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar, where is the big roll? The office needs it today.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Row two, shelf one. It says so on the paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is not in row two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Where are the other rolls?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Row two, shelf two. All four of them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then the big one is somewhere sensible. Behind the door?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Behind the door. Yes. Standing up.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Standing up, because it does not go on a shelf.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Somebody made a good decision and told nobody.' }
  ]
});

PBE1.scene('u4-4-3-pair', {
  set: 'counter',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Where is the big roll?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Row two, shelf one. It says so on the paper.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is not in row two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where are the other rolls?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Row two, shelf two.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is somewhere sensible. Behind the door?' }
  ]
});

PBE1.scene('u4-4-4', {
  set: 'counter',
  arr: 0,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Abu Yasser. Row three, shelf two. The four cartons are not there.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Not there, or gone?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The space is empty. There is nothing in it.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Is there dust?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'No dust. A clean square.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then they went today. Dust takes a week.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So somebody moved them this morning.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Or sold them. I ask the counter first, not the men.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The counter first. Why?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Because four cartons going out of the front door is normal and '
            + 'nobody tells me.' }
  ]
});

PBE1.scene('u4-4-4-pair', {
  set: 'counter',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Row three, shelf two. The four cartons are not there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Not there, or gone?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The space is empty. There is nothing in it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is there dust?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No dust. A clean square.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then they went today.' }
  ]
});

PBE1.scene('u4-4-5', {
  set: 'counter',
  arr: 1,
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'The loading door. Where is it?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'From the gate, go straight on. Past the small store.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Straight on. Past the small store.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Then turn left at the bench. The long bench, not the short one.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Left at the long bench.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The loading door is on your left. The big grey door.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And the other door?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Do not use the other door. It is the office stairs. No lorries.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Straight on, left at the long bench, grey door on the left.' },
    { who: 'ammar', cam: { shot: 'close' },
      en: 'Say it back like that every time. You got it right.' }
  ]
});

PBE1.scene('u4-4-5-pair', {
  set: 'counter',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The loading door. Where is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From the gate, go straight on. Past the small store.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Straight on. Past the small store.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then turn left at the long bench.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Left at the long bench.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is on your left. Do not use the other door.' }
  ]
});

PBE1.scene('u4-4-6', {
  set: 'counter',
  arr: 2,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Ammar. Put the packets on shelf four.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I can reach shelf three. I cannot reach shelf four.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The ladder is next to the bench.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The ladder is not next to the bench. It is in the yard.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Then do not stand on a carton. Wait for the ladder.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I can put them on shelf three and move them later.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Better. Tell me you moved them.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I tell you. And I write it on the sheet.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Good. A man on a carton is a man in hospital.' }
  ]
});

PBE1.scene('u4-4-6-pair', {
  set: 'counter',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Put the packets on shelf four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I can reach shelf three. I cannot reach shelf four.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The ladder is next to the bench.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The ladder is not next to the bench. It is in the yard.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then do not stand on a carton. Wait for the ladder.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I can put them on shelf three and move them later.' }
  ]
});

PBE1.scene('u4-4-7', {
  set: 'counter',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' },
    fouad: { rig: 'm-30s-a', name: 'Fouad', voice: 'en-US-SteffanNeural', shirt: '#3f5d8a', shirt2: '#324a6e',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Fouad has moved eleven things this month. Not one of them is where '
            + 'the map says.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Where are they?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Somewhere sensible. Every time. The long rolls stand behind the door now.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'They do not fit on shelf one. They bend. A bent roll is rubbish.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is true. I have thrown away bent rolls for nine years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I sent a man to row two for a roll on Tuesday. He came back '
            + 'with nothing.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'He should ask me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He did ask you. You were at lunch.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'Then he should ask Samih. Samih knows.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Samih knows. Fouad knows. I know. The map does not.' }
  ]
});

PBE1.scene('u4-4-7-b', {
  set: 'counter',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Ammar. Row two, shelf three. The packets.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Row two. From the door?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'From the door, always. One, two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Shelf three. Row two, shelf three.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Go on, then. Before the lorry.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Samih. The packets are not there. Six packets.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Not there?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'An empty space. Thick dust. They went a long time ago.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Thick dust. Tell Abu Yasser, not me. He keeps the old sheets.' }
  ]
});
