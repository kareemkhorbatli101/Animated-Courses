/* Unit 6 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u6-6-1', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Nour, the Homs order. Sixty boxes, ten packets, four cartons. Van or lorry?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Can it go by van?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It can go by van. It shouldn\'t. The van is one and a half tonnes '
            + 'and this is nearly two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then by lorry.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'By lorry. And the lorry only goes when it is full, so we put the '
            + 'Hama pallets on the same load.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the small parcel for Hama — the two folders?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two folders don\'t travel by lorry. They go with a service driver. '
            + 'Five thousand, there in two hours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And he takes it to the shop?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'He takes it to the garage in Hama. From the garage it goes on foot '
            + '— two streets. Write that on the note, or the customer waits at '
            + 'home all day.' }
  ]
});

PBE3.scene('u6-6-1-pair', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Forty boxes of medicine for Latakia. Refrigerated van or hired lorry?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Can it go by hired lorry?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It can. It shouldn\'t. A lorry isn\'t cold and this is medicine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then by refrigerated van.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By refrigerated van. And the van only goes when it has two drops, '
            + 'so we put the Tartous fridge unit on the same trip.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the small box for Homs?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'One box doesn\'t travel by van. It goes with a service driver.' }
  ]
});

PBE3.scene('u6-6-2', {
  set: 'loadingyard',
  arr: 1,
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'clipboard' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Abu Yasser, I\'ve done Homs, but never Aleppo. How far is it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'About three hundred and fifty kilometres on the motorway.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And how long does it take?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Five hours if the road is good. Six with a loaded lorry. In '
            + 'winter, seven — and you don\'t drive it in the dark.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Seven. And how long is the stop at the checkpoint?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That depends. Ten minutes, sometimes an hour. Have the delivery '
            + 'note in your hand before you stop, not under the seat.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And Homs? How far is Homs from here?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'A hundred and sixty. Two hours, two and a half with a load.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'So Aleppo is more than twice as far.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'More than twice as far, and three times the trouble. Leave at '
            + 'five, not at seven.' }
  ]
});

PBE3.scene('u6-6-2-pair', {
  set: 'loadingyard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I\'ve done Suwayda, but never Tartous. How far is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'About two hundred and fifty on the motorway.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how long does it take?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three and a half hours if the road is good. Four and a half in '
            + 'summer, because of the traffic to the coast.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how long is the stop?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That depends. Twenty minutes at the halfway café, longer on a Friday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So Tartous is more than twice as far as Suwayda.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'More than twice. Leave early, not after nine.' }
  ]
});

PBE3.scene('u6-6-3', {
  set: 'loadingyard',
  arr: 2,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Before you unload — three rules. You mustn\'t park at the loading door.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'But that\'s where the boxes go.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That\'s where the forklift comes out, every four minutes. You park '
            + 'on the left, by the wall, and we bring the trolley to you.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Fine. And?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You must wear the yellow jacket in the yard. It\'s on the hook '
            + 'inside the gate. Yes, in August too.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'You mustn\'t walk in the yellow square. That\'s the forklift. If '
            + 'you need to cross, go round by the wall — it\'s eight steps more.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Eight steps. All right.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And one thing that isn\'t a rule: don\'t leave your keys in the '
            + 'cab. Nobody will take your lorry. But the boys play, and a lorry '
            + 'is not a toy.' },
    { who: 'driver', cam: { shot: 'close' },
      en: 'Understood. Jacket, left of the gate, round the square.' }
  ]
});

PBE3.scene('u6-6-3-pair', {
  set: 'loadingyard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Before you start — three rules. You mustn\'t put anything on the '
            + 'floor near the fryer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'But that\'s where the boxes come in.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s where the hot oil goes if somebody turns. You put the '
            + 'boxes on the steel table, and we take them from there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Fine. And?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You must wash your hands before you touch any food. The sink is by '
            + 'the door, not the one at the back.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You mustn\'t leave the back door open. If you need air, open the '
            + 'window — the cats come in through the door.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All right.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'And one thing that isn\'t a rule: tie your hair back. Nobody will '
            + 'tell you to, but everybody does.' }
  ]
});

PBE3.scene('u6-6-4', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, the small boxes arrive from Aleppo on Tuesday afternoon. '
            + 'The Homs lorry leaves Tuesday morning.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So we can\'t send the boxes on Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why don\'t we send the whole order on Wednesday?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Mr Tarabishi opens his new branch on Wednesday. He wants the boxes '
            + 'on Tuesday evening.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then let\'s split it. The paper and the gloves go Tuesday morning, '
            + 'and the boxes go Tuesday evening with a service driver.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Sixty boxes by service? They won\'t fit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You\'re right. Shall we ask Khalil in Homs for sixty boxes, just '
            + 'this once, and pay a little more?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now that is an idea. How much more?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'About four thousand. For a new branch opening, that\'s nothing.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Do that. And telephone Mr Tarabishi before you order, so he knows '
            + 'we moved for him.' }
  ]
});

PBE3.scene('u6-6-4-pair', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The oven has broken and two hundred people eat on Saturday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So we can\'t cook here.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why don\'t we use the neighbour\'s oven?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It\'s too small — it does twelve trays, and we need ninety.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then let\'s hire one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Hiring takes a week. It won\'t come before Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You\'re right. Shall we cook at the restaurant at night, just this '
            + 'once, and pay the owner?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Now that is an idea. Do that. And speak to him today, so he can '
            + 'tell his staff.' }
  ]
});

PBE3.scene('u6-6-5', {
  set: 'loadingyard',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'clipboard' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Nour, you\'ve sent the Jaramana order in the small van. Why not '
            + 'the lorry? The lorry was in the yard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it\'s four boxes, and the lorry drinks fuel. The small van '
            + 'does Jaramana and two more drops on the same trip.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. And you\'ve put the Hama pallets on Tuesday, not Monday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes — to put them on the same load as Homs. The lorry only goes '
            + 'when it is full, so one journey instead of two.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the customer in Hama agreed to wait a day?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I telephoned him to ask first. He said Tuesday was better for him, '
            + 'because his man is away on Monday.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So the day we chose to save fuel is also the day he wanted.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was luck, not planning. But I telephoned, and that wasn\'t luck.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'No, it wasn\'t. Write both reasons on the sheet — the fuel and the '
            + 'customer. In six months nobody remembers why.' }
  ]
});

PBE3.scene('u6-6-5-pair', {
  set: 'loadingyard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You\'ve booked one big bus. Why not two small ones?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because one big bus is cheaper per child, and one driver watches everybody.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. And you\'ve put the trip on Thursday, not Saturday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes — to get the museum free. It\'s free on Thursdays and it\'s quiet.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the parents agreed?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I telephoned to ask first. Two said Thursday was better, because '
            + 'Saturday is the family day.' }
  ]
});

PBE3.scene('u6-6-6', {
  set: 'loadingyard',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Tarabishi, good afternoon. It\'s Nour from Sham Trading. I\'m '
            + 'telephoning about today\'s delivery.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'It isn\'t here. It was two o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know, and I\'m sorry. The road is closed at Nasiriyah and the '
            + 'lorry is going round by the old road.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And when does it arrive?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s arriving at four, not at two. The driver telephoned me '
            + 'twenty minutes ago; he\'s past the diversion now.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Four o\'clock. I close at five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know you do. If four is too late, we can unload the boxes at '
            + 'your brother\'s shop and bring the rest tomorrow morning.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'No — four is all right. But telephone me when he leaves the diversion.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I will. And I\'ll telephone again at four whether he\'s there or not.' },
    { who: 'tarabishi', cam: { shot: 'close' },
      en: 'Whether he\'s there or not. Good. That\'s what I want.' }
  ]
});

PBE3.scene('u6-6-6-pair', {
  set: 'loadingyard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Nasser, good afternoon. It\'s Samir from Al-Sharq. I\'m '
            + 'telephoning about your machine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was Tuesday. It\'s Tuesday now.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I know, and I\'m sorry. The part came from the supplier in the '
            + 'wrong size and we sent it back this morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when is it ready?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thursday afternoon, not Tuesday. The supplier confirmed the new '
            + 'part an hour ago.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Thursday. I have work waiting.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If Thursday is too late, we can lend you the old machine until '
            + 'then, free. I can bring it this evening.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Bring it. And telephone me on Thursday morning.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I will — and I\'ll telephone on Thursday morning whether the part '
            + 'has come or not.' }
  ]
});

PBE3.scene('u6-6-7', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    driver: { rig: 'm-30s-a', name: 'Driver', voice: 'en-GB-RyanNeural', shirt: '#8a7a2f', shirt2: '#6e6125',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'driver', cam: { shot: 'wide' },
      en: 'Nour, this paper. Three copies, small writing, a box at the '
            + 'bottom. What do I actually do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s the delivery note for Homs. I\'ll tell you only what you do with it.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before anything comes off the lorry, you have this paper in your '
            + 'hand. You and the customer count the four items together.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'Four items. And then he signs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then he signs. If a box is damaged or missing, he writes it on the '
            + 'note before he signs — not afterwards on the telephone.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And if he says he\'ll telephone the office later?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then nothing is written and we have no case. Write it yourself in '
            + 'front of him and ask him to sign next to it.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'And the three copies?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'White stays with him. Yellow comes back to me. Pink you keep in '
            + 'the cab until the end of the month. Never give away the pink one.' },
    { who: 'driver', cam: { shot: 'mid' },
      en: 'White him, yellow you, pink me. And the signs on the road — the '
            + 'diversion at Nasiriyah?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The yellow sign means the old road. It adds about forty minutes. '
            + 'Follow it; don\'t find your own way.' }
  ]
});

PBE3.scene('u6-6-7-b', {
  set: 'loadingyard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'read', hold: 'clipboard' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.48, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Good afternoon, it\'s Nour from Sham Trading. I\'m telephoning '
            + 'about today\'s delivery.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'It was eleven o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know, and I\'m sorry. There\'s a diversion at Nasiriyah and the '
            + 'lorry is going round by the old road.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'So when?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It\'s arriving at one, not at eleven. The driver telephoned me '
            + 'fifteen minutes ago.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'I close for lunch at one.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'If one is difficult, we can leave it at your brother\'s and bring '
            + 'the rest tomorrow morning.' }
  ]
});
