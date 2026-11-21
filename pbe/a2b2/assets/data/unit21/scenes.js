/* Unit 21 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u21-21-1', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The Aleppo pallet has arrived and some of it is damaged.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Do not move anything. How many, out of how many?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Two. Two of the twenty.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Where on the pallet?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Both on the bottom layer, at the same corner.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Then it was stacked on something or it was dropped on that corner, '
            + 'and it was not the lorry — a lorry crushes the top. Photograph it '
            + 'where it stands, with the pallet label in the picture, before '
            + 'anybody lifts anything.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the driver is waiting for a signature.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'He signs ours and we sign his, and on his you write: two boxes of '
            + 'twenty crushed, bottom layer, photographed. Not "damaged". Damaged '
            + 'is an argument. Two of twenty, bottom layer, photographed, is a '
            + 'fact.' }
  ]
});

PBE4.scene('u21-21-1-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The wrap pallet has arrived and some of it is damaged.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do not move anything. How many, out of how many?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four. Four of the thirty.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All four on the same end, and all four on the outside of the pallet.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it was a forklift, not the lorry — a lorry crushes the top '
            + 'and a fork goes into the side. Photograph it where it stands, with '
            + 'the label in the picture.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the driver is waiting for a signature.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'On his you write: four rolls of thirty, crushed ends, outside of '
            + 'the pallet, photographed.' }
  ]
});

PBE4.scene('u21-21-2', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, I would like to make a complaint, and I would like to '
            + 'be quick about it.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two of the twenty boxes arrived crushed, bottom layer, same '
            + 'corner. That is ten per cent and it is the third time this year.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'I am sorry. We will replace them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. But I am not complaining about the two boxes. I am '
            + 'complaining that your loader knew. The corner was crushed before '
            + 'it was wrapped — you can see the wrap over the dent in the '
            + 'photograph — and nobody telephoned us.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That is a different thing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the only thing. Two boxes cost ninety thousand. Finding out '
            + 'at nine forty on a Tuesday, with a customer waiting, costs me a '
            + 'morning and a telephone call I had to make looking stupid.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'What do you want me to do?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Replace the two. And tell me what you will say to the loader, '
            + 'because next time I would rather have the telephone call than the '
            + 'boxes.' }
  ]
});

PBE4.scene('u21-21-2-pair', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Barakat, I would like to make a complaint, and I would like to '
            + 'be quick about it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The invoice is at the old price again — 180,000 too much. That is '
            + 'the fourth time this year.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am sorry. We will credit it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. But I am not complaining about the 180,000; you have '
            + 'always credited it. I am complaining that each time somebody says '
            + 'they will tell the office, and each time I check the next invoice '
            + 'anyway.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a different thing.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'It is the only thing. The money comes back. The four telephone '
            + 'calls and the checking do not.' }
  ]
});

PBE4.scene('u21-21-3', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'tarabishi', cam: { shot: 'wide' },
      en: 'Hala, I have opened the order and there are four sizes in it and I '
            + 'ordered three. And the small ones are missing.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I am very sorry about that. That should not have happened and I '
            + 'can hear it has wasted your morning.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'It has. Whose fault is it?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I do not know yet, and I would rather find out than guess. What I '
            + 'can tell you now is what I will do: the small ones go on the four '
            + 'o\'clock van and I will take the extra size back on the same '
            + 'journey.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Somebody in your warehouse is not reading.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That may be true and I am not going to say it on the telephone '
            + 'about somebody who is not here. I will find out today and I will '
            + 'tell you what it was, even if it turns out to be us at the '
            + 'counter.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'Even if it is you?' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'Especially if it is me. Four o\'clock van, the small ones, and the '
            + 'extra size collected. And I will telephone you tomorrow with what '
            + 'happened.' }
  ]
});

PBE4.scene('u21-21-3-pair', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Somebody at your counter was short with me on Sunday. I have been '
            + 'coming here for six years.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am very sorry about that. That should not have happened, and '
            + 'after six years it should not have happened to you of all people.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who was it? The young one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know yet, and I would rather find out than guess. What I '
            + 'can tell you now is that I will find out today.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was the young one.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That may be, and I am not going to say it on the telephone about '
            + 'somebody who is not here. I will tell you what I find, even if it '
            + 'turns out that we were short-staffed and nobody was rude at all.' }
  ]
});

PBE4.scene('u21-21-4', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Haffar, two questions. What would put this right, and what would not?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'I do not want money off. I want the twelve boxes I ordered, '
            + 'because the shop is empty of them and the money does not fill a '
            + 'shelf.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: twelve boxes on tomorrow morning\'s van, before you open. No '
            + 'charge for the delivery.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And one thing you have not asked for. For the next three months, '
            + 'when you order that size, I will telephone you on the morning it '
            + 'is picked and tell you how many are actually going on the van.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Why three months?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because three months is long enough for you to stop thinking about '
            + 'it. If I said for ever you would not believe me, and if I said '
            + 'once you would be right not to.' },
    { who: 'customer', cam: { shot: 'close' },
      en: 'Nobody has ever given me a reason for the length of anything.' }
  ]
});

PBE4.scene('u21-21-4-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Khalil, two questions. What would put this right, and what would not?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I do not want an apology. I want to stop checking every invoice you send me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then: the 180,000 credited on this one, today.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And one thing you have not asked for. For the next six months, '
            + 'Rana checks your invoices before they are sent and signs the copy. '
            + 'If one is wrong, it is her name on it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why six months?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Because six months is long enough for you to stop looking. If I '
            + 'said for ever you would not believe me, and if I said one month '
            + 'you would be right not to.' }
  ]
});

PBE4.scene('u21-21-5', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The new rule: goods must be checked on arrival.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is not a rule. That is a hope. A rule needs three things: '
            + 'who, against what, and before when.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: goods must be checked by the person receiving them, against '
            + 'the order and not the delivery note, before the driver leaves.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Better. And what happens when the driver will not wait?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He always waits.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'He waits for me. He will not wait for Hala at the counter on a '
            + 'Thursday, and if the rule has no answer for that, she will sign '
            + 'and we will have a rule nobody keeps.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: if the driver cannot wait, write "received unchecked" on his '
            + 'note before signing, and check within the hour.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Now it is a rule. Three sentences, one exception, and the '
            + 'exception has its own instruction. Put the reason underneath, in '
            + 'one line, so that in two years somebody knows why.' }
  ]
});

PBE4.scene('u21-21-5-pair', {
  set: 'returnsdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The new rule: collections must be signed for.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a hope. Who, against what, and before when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then: collections must be signed for by the person handing the '
            + 'goods over, against the collection note, before the goods leave '
            + 'the yard.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better. And at five past seven, when the office is locked and only '
            + 'the warehouse is open?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They always come in office hours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They do not, and you know it. If the rule has no answer, somebody '
            + 'will hand goods over with no paper at all.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then: outside office hours, write the name, the vehicle and the '
            + 'time in the gate book, and the note is completed the next morning.' }
  ]
});

PBE4.scene('u21-21-6', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    technician: { rig: 'm-50s-b', name: 'Technician', voice: 'en-GB-RyanNeural', shirt: '#4f6b57', shirt2: '#3e5445',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Rateb, the shutter motor has stopped. You fitted it on the '
            + 'seventeenth of December, which is four months ago. Is it under '
            + 'guarantee?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'It is. Twelve months on the motor.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twelve months from the date of fitting, or from the date you bought it?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'From fitting. The seventeenth of December.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good. And what does the guarantee cover — the motor only, or the '
            + 'labour of changing it?' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'The motor. The labour is mine to charge and I would not charge '
            + 'you, four months in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then let us write that down, because you and I will both remember '
            + 'it differently in September. The motor is covered to the '
            + 'seventeenth of December; the labour is not covered but you are not '
            + 'charging it this time; and if it fails a third time we will talk '
            + 'about the wiring, which you told me about in December and which we '
            + 'have not done.' },
    { who: 'technician', cam: { shot: 'mid' },
      en: 'You wrote that down in December as well.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I did. It is the only reason this conversation is two minutes long.' }
  ]
});

PBE4.scene('u21-21-6-pair', {
  set: 'returnsdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The clutch has gone. You fitted it on the third of March, which is '
            + 'seven months ago. Is it under guarantee?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is. Twelve months on the part.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twelve months from the date of fitting, or from the date you '
            + 'bought the part?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From purchase. The eleventh of January.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So it expires in January, not in March. And does it cover the labour?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The part only.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what does it not cover? Is there a distance limit?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Forty thousand kilometres. It is on the back of my copy.' }
  ]
});

PBE4.scene('u21-21-7', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'There is a complaint letter on the board about the Jaramana '
            + 'delivery. That was mine. It says the goods were damaged.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the paragraph headed "The complaint".' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"It is not the two boxes. The wrap is stretched over the dent, '
            + 'which means the corner was crushed before it was wrapped."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before it was wrapped. Your van did not wrap anything. The '
            + 'complaint is about Aleppo, and the word that worried you — damaged '
            + '— is in the first paragraph, which is the facts, not the '
            + 'complaint.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then why is my delivery in it at all?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it is how the damage was found: you delivered it, Hala '
            + 'opened it, and the photographs were taken before anything moved. '
            + 'You are in the evidence, not in the complaint. And the letter asks '
            + 'for something that is not a remedy at all — a sentence about what '
            + 'will be said to whoever wrapped it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So nobody is asking for money.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Money is the small half. Read the last line.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"I would rather write this than not write it."' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That is a letter from somebody who intends to keep buying. A '
            + 'letter from somebody who is leaving does not explain itself.' }
  ]
});

PBE4.scene('u21-21-7-pair', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I took that order. The letter says the order was short.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the paragraph headed "The complaint".' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"We were told on Tuesday afternoon, by our own customer, that the '
            + 'order was short. Nobody from your company telephoned."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the complaint is the telephone call that was not made, and '
            + 'that is not the order being taken. The paragraph headed "What '
            + 'happened" says the order was taken correctly on Sunday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So why am I in it at all?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Because it is the sequence. You are in the evidence. And look at '
            + 'what they are asking for — the two lines, and a note of what will '
            + 'change. The second one is the letter.' }
  ]
});

PBE4.scene('u21-21-7-b', {
  set: 'returnsdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.26, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I would like to make a complaint, and I would like to be quick '
            + 'about it. Two of the twenty boxes arrived crushed, both on the '
            + 'bottom layer at the same corner.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'But I am not complaining about the two boxes. The wrap is '
            + 'stretched over the dent, so the corner was crushed before it was '
            + 'wrapped, and nobody telephoned us.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I would like two replacement boxes or a credit note, your choice, '
            + 'by Thursday. And one sentence about what will be said to whoever '
            + 'wrapped it.' }
  ]
});
