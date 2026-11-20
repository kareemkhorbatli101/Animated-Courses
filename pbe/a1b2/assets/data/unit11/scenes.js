/* Unit 11 — the acted dialogues. Every line is the book's own. */
PBE2.scene('u11-11-1', {
  set: 'counter',
  arr: 0,
  cast: {
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'ammar', cam: { shot: 'wide' },
      en: 'Majd. You say the same thing to everybody.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Good morning. Can I help you? Two things. Every time.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Four hundred times a week.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Four hundred times a week, and the customer hears it once.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'So it has to sound like the first time.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'It has to sound like the first time. That is the only hard part of this job.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And the shop owner who comes at eight?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Abu Fouad. Eleven years. He gets the same two things.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Even though he never answers?' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'Even though he never answers. He would notice if I stopped.' }
  ]
});

PBE2.scene('u11-11-1-pair', {
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
      en: '(comes in)' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good morning. Can I help you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty bags, please.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty bags. How many?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Of course. One moment.' }
  ]
});

PBE2.scene('u11-11-2', {
  set: 'counter',
  arr: 1,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Good morning. Can I help you?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Twenty of the small bags. And two kilos of sugar.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Twenty small bags and two kilos of sugar. Is that right?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is right.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'The bags I have. The sugar I must weigh. One moment.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And is the sugar the white or the brown?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Which would you like?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'White.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Twenty small bags, two kilos of white sugar. Anything else?' },
    { who: 'customer', cam: { shot: 'close' },
      en: 'That is all.' }
  ]
});

PBE2.scene('u11-11-2-pair', {
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
      en: 'Good morning. Can I help you?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty of the small bags. And two kilos of sugar.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty small bags and two kilos of sugar. Is that right?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The bags I have. The sugar I must weigh.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And is the sugar the white or the brown?' }
  ]
});

PBE2.scene('u11-11-3', {
  set: 'counter',
  arr: 2,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'How much are the small bags?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Eight hundred SYP each.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Each? Not for the twenty?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Each. Twenty of them is sixteen thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Say it again.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Eight hundred each. Twenty bags. Sixteen thousand altogether.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And the big ones?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Two thousand each. I always say each, because once a man heard '
            + 'eight hundred and thought it was for the box.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'What happened?' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'He paid eight hundred and took twenty bags, and I found out on Thursday.' }
  ]
});

PBE2.scene('u11-11-3-pair', {
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
      en: 'How much are the small bags?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eight hundred SYP each.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Each? Not for the twenty?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Each. Twenty of them is sixteen thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Say it again.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Eight hundred each. Twenty bags. Sixteen thousand altogether.' }
  ]
});

PBE2.scene('u11-11-4', {
  set: 'counter',
  arr: 0,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Twenty small bags and two kilos of white sugar. Anything else?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is all.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Twenty bags at eight hundred is sixteen thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Sixteen.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Two kilos of white at four thousand a kilo is eight thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Eight.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Sixteen and eight is twenty-four thousand. Altogether twenty-four thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Twenty-four. Here is twenty-five.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Twenty-five thousand. Your change is one thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'You add up out loud.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'I add up out loud so you can hear it. If I am wrong you stop me '
            + 'before the money moves.' }
  ]
});

PBE2.scene('u11-11-4-pair', {
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
      en: 'Twenty bags and two kilos of white sugar.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Twenty at eight hundred is sixteen thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Sixteen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two kilos at four thousand is eight thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eight.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Sixteen and eight is twenty-four thousand. Altogether twenty-four thousand.' }
  ]
});

PBE2.scene('u11-11-5', {
  set: 'counter',
  arr: 1,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Here is your receipt. Twenty bags, two kilos of sugar, twenty-four thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'It says 800 next to the bags.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Eight hundred each. The machine does not print each.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'So next week somebody reads 800 for twenty bags.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Somebody did. In February. The office rang me about it.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'And now I write each on it by hand. Every receipt with a price on it.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'By hand. Forty times a day.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'Forty times a day, four seconds each. It is better than one '
            + 'telephone call from the office.' }
  ]
});

PBE2.scene('u11-11-5-pair', {
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
      en: 'Here is your receipt. Twenty bags, two kilos of sugar, twenty-four thousand.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It says 800 next to the bags.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eight hundred each. The machine does not print each.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So next week somebody reads 800 for twenty bags.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Somebody did. In February.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And now?' }
  ]
});

PBE2.scene('u11-11-6', {
  set: 'counter',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.46, bottom: 46, at: [0.35, 0.62],
      pose: 'read' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' },
    ammar: { rig: 'm-20s-a', name: 'Ammar', voice: 'en-US-AndrewNeural', shirt: '#2f6f8f', shirt2: '#255a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Here is your change — one thousand. Thank you. See you Thursday.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thursday. Yes. (leaves)' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'Why Thursday?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'He comes Tuesday and Thursday. Eleven years.' },
    { who: 'ammar', cam: { shot: 'mid' },
      en: 'And if you just said see you?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Then it is a goodbye. See you Thursday is an appointment.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the white sugar comes Wednesday. Tell him.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Abu Fouad. The white sugar comes Wednesday — there will be plenty '
            + 'on Thursday.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: '(from the door) Good.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Ten seconds. And that is the only thing he has said to us today.' }
  ]
});

PBE2.scene('u11-11-6-pair', {
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
      en: 'Here is your change — one thousand. Thank you. See you Thursday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thursday. Yes. (leaves)' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The white sugar comes Wednesday — there will be plenty on Thursday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '(from the door) Good.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ten seconds.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Ten seconds, and he knows two things he did not know.' }
  ]
});

PBE2.scene('u11-11-7', {
  set: 'counter',
  arr: 0,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Last week they were six hundred. The paper says six hundred.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'They went up on the first. Eight hundred each.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'The paper on your wall says six hundred. I read it when I came in.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'The paper on the wall is the old one. Somebody did not change it.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Then I will pay six hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He is right. The paper says six hundred and he read it before he ordered.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'And the new list is in the office, where nobody can see it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The new list has been in the office since the first. Eleven days.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Eleven days at two hundred a bag. I have been charging eight '
            + 'hundred all week and nobody argued until now.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Nobody argued because nobody reads the wall. He reads the wall.' }
  ]
});

PBE2.scene('u11-11-7-b', {
  set: 'counter',
  arr: 0,
  cast: {
    majd: { rig: 'm-20s-b', name: 'Majd', voice: 'en-US-BrianNeural', shirt: '#7a5ea8', shirt2: '#624b86',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'read', hold: 'note' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'majd', cam: { shot: 'wide' },
      en: 'Good afternoon. Can I help you?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Six of the large bags, please.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Six large bags. Is that right?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is right. How much?' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Two thousand SYP each. Six at two thousand is twelve thousand. '
            + 'Altogether twelve thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Here is fifteen.' },
    { who: 'majd', cam: { shot: 'mid' },
      en: 'Fifteen thousand. Your change is three thousand. Here is your '
            + 'receipt — six large bags, twelve thousand.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'majd', cam: { shot: 'close' },
      en: 'Thank you. See you Sunday.' }
  ]
});
