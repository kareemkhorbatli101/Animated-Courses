/* Unit 7 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u7-7-1', {
  set: 'dock',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Two boxes for the counter. Take the small one first.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'The small one? The big one is nearer.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The small one is heavy. The big one is light.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'A small heavy box and a big light box.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Labels in the small one. Empty bags in the big one.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So the big one I can carry on my shoulder.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'The big one you can carry with one hand. The small one needs two.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Small and heavy is the dangerous one.' },
    { who: 'samih', cam: { shot: 'close' },
      en: 'Small and heavy is always the dangerous one. Nobody expects it.' }
  ]
});

PBE2.scene('u7-7-1-pair', {
  set: 'dock',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Two boxes for the counter. Take the small one first.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The small one? The big one is nearer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The small one is heavy. The big one is light.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'A small heavy one and a big light one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Labels in the small one. Empty bags in the big one.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the small one needs two hands.' }
  ]
});

PBE2.scene('u7-7-2', {
  set: 'dock',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Abu Yasser. A carton off the Aleppo lorry. It is crushed.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Crushed where?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'One corner. The bottom corner, this side.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And inside?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I have not opened it. The outside is crushed. I do not know about '
            + 'the inside.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. Do not open it yet. Is it wet?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Not wet. Dry. Just crushed.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Dry and crushed on one corner. That is a box that was dropped, not '
            + 'a box that sat in the rain.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'How do you know?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Rain makes a mark all along the bottom. A drop makes one corner. '
            + 'Twenty years.' }
  ]
});

PBE2.scene('u7-7-2-pair', {
  set: 'dock',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'A carton off the Aleppo lorry. It is crushed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Crushed where?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One corner. This side.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And inside?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have not opened it. I do not know about the inside.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Is it wet?' }
  ]
});

PBE2.scene('u7-7-3', {
  set: 'dock',
  arr: 2,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'The Aleppo cartons. Some of them are crushed.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'How many?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'A few.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Ammar. How many cartons came, and how many are crushed?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Ten came. Two are crushed.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two of ten. Now I can do something. Two I take off the invoice.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if it was more?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Half, and I telephone Aleppo. Most of them, and the lorry goes back full.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So the number decides.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'The number decides. Some decides nothing. Two of ten is a note. '
            + 'Eight of ten is a lorry turning round.' }
  ]
});

PBE2.scene('u7-7-3-pair', {
  set: 'dock',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The Aleppo cartons. Some of them are crushed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A few.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many came, and how many are crushed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ten came. Two are crushed.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Two of ten. Now I can do something.' }
  ]
});

PBE2.scene('u7-7-4', {
  set: 'dock',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Two crushed. Did you crush them?' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'No. They came like this. I saw them on the lorry, before I touched them.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Before you touched them. You are sure.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I am sure. I showed the driver and he looked at them too.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You showed the driver before you unloaded. Good.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Is the driver in trouble?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The driver did not load it. Somebody in Aleppo stacked something '
            + 'heavy on it.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So nobody here did it.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Nobody here did it, and nobody in Aleppo will remember who. That '
            + 'is why we write the carton, not the man.' }
  ]
});

PBE2.scene('u7-7-4-pair', {
  set: 'dock',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Two crushed. Did you crush them?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. They came like this. I saw them on the lorry, before I touched them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before you touched them. You are sure?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am sure. I showed the driver and he looked at them too.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You showed the driver before you unloaded. Good.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Is the driver in trouble?' }
  ]
});

PBE2.scene('u7-7-5', {
  set: 'dock',
  arr: 1,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Two of the ten are crushed. They came like this. What do I do?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Put the two aside. By the bench, not on the shelf.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the eight?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The eight go on row three. Normal.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the two by the bench?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Open one. The worse one. If the labels inside are good, we keep '
            + 'both and I take two off the invoice.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if the labels are damaged?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then both go back on the next Aleppo lorry and I telephone them today.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Why are you telling me all of it?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Because next time I am not here, and you will have to decide. A '
            + 'man who was only told what to do learns nothing.' }
  ]
});

PBE2.scene('u7-7-5-pair', {
  set: 'dock',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Two of the ten are crushed. They came like this. What do I do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Put the two aside. By the bench, not on the shelf.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the eight?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They go on row three. Normal.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if the inside is damaged?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then they go back on the next Aleppo lorry.' }
  ]
});

PBE2.scene('u7-7-6', {
  set: 'dock',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ammar. Your line on the damage sheet. Twelve words.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Is twelve enough?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I took it upstairs. The office took forty thousand off the Aleppo '
            + 'invoice this morning.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'From twelve words?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'From twelve words with two numbers in them. Ten cartons came, two '
            + 'crushed, bottom corner, came like this.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I wrote it in two minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two minutes. And last month somebody wrote some boxes damaged and '
            + 'I had to walk down here twice.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And then the lorry had gone and we paid for all twelve. That is '
            + 'what the two numbers are for.' }
  ]
});

PBE2.scene('u7-7-6-pair', {
  set: 'dock',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Ten cartons came. Two are crushed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where on them?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Bottom corner.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And did they come like that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They came like this. I saw them on the lorry.' },
    { who: 'b', cam: { shot: 'close' },
      en: '(writes, then reads it back) Ten cartons came, two crushed, bottom '
            + 'corner, came like this.' }
  ]
});

PBE2.scene('u7-7-7', {
  set: 'dock',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.46, bottom: 46, at: [0.31, 0.62],
      pose: 'read' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.46, bottom: 46, at: [0.57, 0.62],
      pose: 'write' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' },
    fouad: { rig: 'm-30s-a', name: 'Fouad', voice: 'en-US-SteffanNeural', shirt: '#3f5d8a', shirt2: '#324a6e',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The Aleppo invoice. We paid for twelve cartons and two were crushed.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Who saw them?' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'I saw them. On the lorry, Tuesday morning.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I saw them. I carried them to the bench.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I saw them. I told Fouad.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And I saw them. I walked past the bench on Tuesday afternoon.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four men. And the damage sheet for Tuesday is empty.' },
    { who: 'fouad', cam: { shot: 'mid' },
      en: 'I thought Ammar wrote it. He is the one who writes things.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'I thought Abu Yasser wrote it. He saw them after me.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'I thought it was already written. Four of us knew.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Four of us knew. The sheet did not. And the sheet is what Nour '
            + 'takes upstairs.' }
  ]
});

PBE2.scene('u7-7-7-b', {
  set: 'dock',
  arr: 0,
  cast: {
    samih: { rig: 'm-20s-b', name: 'Samih', voice: 'en-US-EricNeural', shirt: '#2f7f6a', shirt2: '#256455',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'samih', cam: { shot: 'wide' },
      en: 'Abu Yasser. The Homs bags. Twelve came. Three are torn.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Torn where?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'Along the top, all three on the same side of the pallet.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Did they come like that?' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'They came like this. I saw them on the van and I showed the driver '
            + 'at ten past eight.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Good. Put the three aside, by the bench. The nine go on row two.' },
    { who: 'samih', cam: { shot: 'mid' },
      en: 'And the three?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Open one. If the bags inside are clean we keep all three and the '
            + 'office takes three off the invoice.' }
  ]
});
