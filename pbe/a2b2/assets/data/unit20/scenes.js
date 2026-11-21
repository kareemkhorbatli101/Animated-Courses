/* Unit 20 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u20-20-1', {
  set: 'shopfront',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I am writing the list for the maintenance man. The shutter needs adjusting.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The shutter does not need adjusting. The shutter has been adjusted '
            + 'four times since March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What does it need, then?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The bottom limit switch needs replacing. Adjusting is what we have '
            + 'been paying for four times, and each time it is right for a '
            + 'fortnight. A part is about 300,000 and four adjustments are about '
            + '480,000.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then why has nobody said that?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I have said it to the man each time and he says he will order the '
            + 'part. I have never written it down, and nobody has ever written '
            + 'down that it is the fourth time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four times since March is the sentence, then. Not "the shutter '
            + 'needs adjusting".' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Four times since March, and it stops a metre from the ground, and '
            + 'the last one was a fortnight ago. Put all three on the paper and '
            + 'he will bring the switch.' }
  ]
});

PBE4.scene('u20-20-1-pair', {
  set: 'shopfront',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I am writing the list for the garage. The van needs looking at.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The van does not need looking at. It has been looked at three '
            + 'times since the rain in March.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What does it need, then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'A front brake hose. It pulls left under braking and it has done '
            + 'since March. A hose is about 180,000 and three inspections are '
            + 'about 240,000.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then why has nobody said that?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I have said it. I have never written it down.' }
  ]
});

PBE4.scene('u20-20-2', {
  set: 'shopfront',
  arr: 1,
  cast: {
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'technician', cam: { shot: 'wide' },
      en: 'I can come on Thursday.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Thursday is good. What time?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'In the morning, probably.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Could you make it a time? The shutter is on the loading bay and we '
            + 'cannot load while you are working on it, so I have to move three '
            + 'deliveries.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'Between nine and one. I cannot be closer than that — I have one '
            + 'before you and I do not know what it is yet.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Between nine and one, then. Two things: would you telephone me '
            + 'when you leave the job before mine, so that I have half an hour? '
            + 'And if the one before you turns out to be a long job, would you '
            + 'tell me by nine rather than at twelve?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'Nobody has ever asked me that second one.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Because at twelve I have already moved the deliveries. At nine I have not.' },
    { who: 'technician', cam: { shot: 'close' },
      en: 'I will telephone you by nine either way.' }
  ]
});

PBE4.scene('u20-20-2-pair', {
  set: 'shopfront',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I can come on Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Tuesday is good. What time?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In the afternoon, probably.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Could you make it a time? The generator has to be off while you '
            + 'work, and that is the cold store, so I have to move stock to the '
            + 'neighbour.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Between one and five. I cannot be closer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Between one and five, then. Would you telephone when you leave the '
            + 'job before mine, so that I have an hour? And if the earlier job '
            + 'runs long, would you tell me by eleven rather than at four?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody asks me that.' }
  ]
});

PBE4.scene('u20-20-3', {
  set: 'shopfront',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Rateb, it is Nour at Sham Trading. The shutter is still not '
            + 'working. You came on Thursday the eleventh, it worked on Thursday '
            + 'and on Friday, and it stopped again on Sunday — the same fault, a '
            + 'metre from the ground.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'I am sorry. I did say the switch might not be the only thing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You did, and I wrote it down. I am not telephoning to complain; I '
            + 'am telephoning to agree what happens next.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'I can come on Wednesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before Wednesday, three things. What do you think it is now? What '
            + 'will it cost? And is any of Thursday\'s work covered, since it is '
            + 'the same fault within a week?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'The motor, probably. About nine hundred thousand with the fitting. '
            + 'And I will not charge for Wednesday\'s visit — it is the same '
            + 'fault.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. Then Wednesday, between nine and one, the motor priced '
            + 'at nine hundred, no call-out. I will put that in a message now so '
            + 'that we both have it.' },
    { who: 'technician', cam: { shot: 'close' },
      en: 'Most people shout at me on the second call.' }
  ]
});

PBE4.scene('u20-20-3-pair', {
  set: 'shopfront',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Barakat, it is Nour. The order is short again — the same two '
            + 'lines as on the fourth. Short on the fourth, short on the '
            + 'eighteenth, the same two lines both times.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am sorry. I will send them today.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. I am not telephoning to complain; I am telephoning to '
            + 'agree what happens next. Three things. What has changed in your '
            + 'picking since October? What will the credit be? And will the '
            + 'December order be checked against the sheet before it leaves you?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Checked before it leaves. I will do it myself.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then December checked by you, the credit this week, and I will put '
            + 'that in a message so that we both have it.' }
  ]
});

PBE4.scene('u20-20-4', {
  set: 'shopfront',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Right — the repair book. On Wednesday the seventeenth the motor '
            + 'was replaced by Rateb Engineering.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And the limit switch was replaced on the eleventh, by the same '
            + 'man, and it was not the fault.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should that go in? It did not fix it.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Especially that. In two years somebody will say the switch has '
            + 'never been changed, and it has — six days before the motor.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the wiring?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Say it plainly: the wiring to the motor was not replaced, and it '
            + 'is twenty years old. He said it should be done within the year. '
            + 'That is a temporary repair whether he calls it one or not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: motor replaced the seventeenth; switch replaced the eleventh, '
            + 'not the fault; wiring not replaced, twenty years old, recommended '
            + 'within twelve months. And a date to look at it again.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'A date. Write December. A thing with no date on it is a thing nobody does.' }
  ]
});

PBE4.scene('u20-20-4-pair', {
  set: 'shopfront',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Right — the book. In October two tiles were replaced by the roofer '
            + 'from the market.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the gutter was cleared in August, by the same man, and it was '
            + 'not the cause.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Should that go in? It did not fix it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Especially that. In two years somebody will say the gutter has '
            + 'never been looked at.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the flashing?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Say it plainly: the flashing was not replaced. He said it has one '
            + 'more winter in it. That is a temporary repair whether he calls it '
            + 'one or not. Write September.' }
  ]
});

PBE4.scene('u20-20-5', {
  set: 'shopfront',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' },
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Before you start — how much will it cost?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'The motor is about eight hundred and fifty. With the fitting, nine hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nine hundred including the fitting. Does that include coming out?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'No call-out this time; it is the same fault.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And does it include anything else — the brackets, the bolts, the '
            + 'small things?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'The brackets if they need changing. They usually do on a shutter '
            + 'this age. Say another fifty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then let us say nine hundred and fifty, and if anything takes it '
            + 'over a million, you stop and telephone me before you do it. Not '
            + 'after.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'And if you do not answer?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you do nothing and you do not lose the day — I will pay for '
            + 'the visit. I would rather pay for a wasted morning than find out '
            + 'on an invoice.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'Most people say "do whatever is necessary".' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And then most people are surprised, and then everybody is annoyed, '
            + 'and the next repair is harder than it needed to be.' }
  ]
});

PBE4.scene('u20-20-5-pair', {
  set: 'shopfront',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Before you start — how much will it cost?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The repointing is about one million two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One point two including what?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The work and the materials.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And does it include the scaffolding, making good the paint, and '
            + 'taking the rubble away?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The scaffolding is about two hundred. The paint is yours. The '
            + 'rubble, say fifty.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then one million four fifty, and the paint is ours. If anything '
            + 'takes it over one and a half, you stop and telephone me before you '
            + 'do it. And if I do not answer, you do nothing and we pay for the '
            + 'day.' }
  ]
});

PBE4.scene('u20-20-6', {
  set: 'shopfront',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Thank you for coming on the same day. The lorry went out at four '
            + 'because of it, and the Homs customer does not know anything '
            + 'happened.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'It was on my way.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was not on your way; Mezzeh is not on the way to anywhere from '
            + 'Qudsaya. Thank you also for telling me in December that the switch '
            + 'might not be the only thing. That is why today was a short '
            + 'conversation and not an argument.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'People do not usually remember that part.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: the motor is in, tested six times, nine hundred and fifty. '
            + 'The wiring is not done and you have said within twelve months, '
            + 'about four hundred and fifty. I am writing December in the book '
            + 'for that, and I will telephone you in November.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'You could write a line for me. People ask me for somebody who has used me.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Gladly, and I will put the December warning in it, because that is '
            + 'the thing that makes you worth telephoning. Send me where to write '
            + 'it.' }
  ]
});

PBE4.scene('u20-20-6-pair', {
  set: 'shopfront',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Thank you for telephoning in March before the shipment was late. '
            + 'Thirty rolls came by bus and no customer waited.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was not nothing; nobody else telephones before it is news. '
            + 'Thank you also for saying you did not know how long it would be, '
            + 'instead of guessing. That is why I planned for ten days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'People do not usually remember that part.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then: the quarter\'s order is three hundred, the price is held to '
            + 'December, and the hundred-roll question is still open. I will come '
            + 'back to you on that in November.' }
  ]
});

PBE4.scene('u20-20-7', {
  set: 'shopfront',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The maintenance agreement on the board. Twelve months, all '
            + 'servicing included. So when the brake hose goes, that is covered.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the line under it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"Scheduled servicing and labour. Parts and consumables are '
            + 'chargeable at the current rate."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the brake hose is not covered. Labour is the man\'s time. '
            + 'Parts are everything he fits. The agreement pays for him to look '
            + 'and not for anything he finds.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then what is it worth?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Quite a lot, actually. The servicing is four visits a year, which '
            + 'is about 600,000 of labour, and it is the reason somebody looks at '
            + 'the van before it breaks instead of after. But it is not '
            + 'insurance, and the word on the board that makes everybody think it '
            + 'is, is all.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So when something goes wrong—' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You ask the five questions, same as always. How much, what is '
            + 'included, what is not, what the limit is, and what happens if '
            + 'nobody answers. The agreement changes the first answer and not the '
            + 'other four.' }
  ]
});

PBE4.scene('u20-20-7-pair', {
  set: 'shopfront',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The shutter is guaranteed for twelve months, so anything that goes '
            + 'wrong with it is theirs.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the second sentence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"The guarantee covers the replaced part and the labour of '
            + 'replacing it. It does not cover consequential damage, wear items, '
            + 'or faults arising from a different component."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it covers the motor and fitting the motor. It does not cover '
            + 'the wiring, because that is a different component, and it does not '
            + 'cover the day we could not load, because that is consequential.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what is it worth?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'If the motor fails again before December, he fits another one free '
            + '— that is 900,000. It is worth having and it is not cover for the '
            + 'shutter. The word that misleads everybody is guaranteed.' }
  ]
});

PBE4.scene('u20-20-7-b', {
  set: 'shopfront',
  arr: 0,
  cast: {
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.50, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'technician', cam: { shot: 'wide' },
      en: 'It is the motor, not the switch. I can come on Wednesday, between '
            + 'nine and one — I cannot be closer than that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Wednesday, nine to one. How much will it cost?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'Nine hundred and fifty, including the fitting and the brackets. No '
            + 'call-out, because it is the same fault within a week. The wiring '
            + 'is not in that — that is separate, and it is about four hundred '
            + 'and fifty.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And if anything takes it over a million, you stop and telephone me '
            + 'before you do it.' }
  ]
});
