/* Unit 19 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u19-19-1', {
  set: 'showroom',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I am making a list for the insurance. Where does everything come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Boxes and wrap from Ms Shamsi in Aleppo — eleven years. Tape and '
            + 'labels from a wholesaler in Damascus, about twenty minutes away. '
            + 'Pallets from a man in Adra who also takes the broken ones back.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the paper?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Paper we buy from whoever is cheapest that month. It is the only '
            + 'line we do that with.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Why not everything?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because when the Aleppo road was closed for nine days in March, Ms '
            + 'Shamsi telephoned us before we telephoned her and put thirty rolls '
            + 'on a bus. Nobody does that for a customer who buys from whoever is '
            + 'cheapest that month.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So the eleven years is worth something.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The eleven years is worth about four per cent, which is what we '
            + 'are probably paying over the cheapest price. Write that in your '
            + 'list too — it is not a secret and Mr Ayoub knows it to the dinar.' }
  ]
});

PBE4.scene('u19-19-1-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I am making a list for the insurance. Where does everything come from?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Steel from a stockholder in Damascus — nine years. Paint from a '
            + 'distributor in Homs, two years. Fixings from whoever is cheapest '
            + 'that month.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And why the fixings?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because they are the same everywhere. It is the only line we do that with.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why not everything?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Because the stockholder held a price for three weeks through a '
            + 'currency move last year. He did not have to and he did not mention '
            + 'it.' }
  ]
});

PBE4.scene('u19-19-2', {
  set: 'showroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Shamsi, I want to ask you something and I would rather ask it '
            + 'plainly. We normally take a hundred rolls. If we took three '
            + 'hundred, could you do better than the hundred price?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'How much better are you asking for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Five per cent. And we would pay within ten days instead of thirty.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Three per cent, and ten days. Five is the price I give the man who '
            + 'takes a thousand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three per cent and ten days, and would you hold that price until '
            + 'the end of the year?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Until the end of the year, unless the exchange rate moves more '
            + 'than ten per cent. I will put that in writing because you will ask '
            + 'me for it anyway.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would have asked.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'You asked for a number, you offered something, you took less than '
            + 'you asked for, and you got one more thing at the end. That is the '
            + 'whole of it. In eleven years I have never once asked her for three '
            + 'per cent.' }
  ]
});

PBE4.scene('u19-19-2-pair', {
  set: 'showroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Nahhas, I want to ask you something plainly. You have put the '
            + 'price up eleven per cent.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How much better are you asking for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Half of it. And we would order twice a year instead of monthly, '
            + 'and take the four-metre lengths you cannot sell.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Six per cent, not five and a half, and you take the four-metre '
            + 'lengths every time, not when it suits you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six per cent, four-metre lengths every time, and would you hold '
            + 'that until the end of the quarter?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Until the end of the quarter. I will put it in writing.' }
  ]
});

PBE4.scene('u19-19-3', {
  set: 'showroom',
  arr: 2,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'Your price is higher than the place in Jaramana. I have been '
            + 'buying from you for two years and I would rather stay.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then let me put three things on the table and you choose. If you '
            + 'take a hundred boxes instead of sixty, we will do them at the '
            + 'hundred price — that is about six per cent.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'I have nowhere to keep a hundred.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then the second. If you pay within ten days, we will take two per '
            + 'cent off, and you can keep ordering sixty.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Ten days is hard in a bad month.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then the third, and it costs us nothing. If you move your delivery '
            + 'from Thursday to Tuesday, we will put you on the lorry that '
            + 'already goes to Jaramana, and you will have it before the shop '
            + 'opens instead of at two in the afternoon.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That one. That is worth more to me than the two per cent.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'I thought it might be. Nobody ever asks for it because nobody '
            + 'knows the lorry goes past.' }
  ]
});

PBE4.scene('u19-19-3-pair', {
  set: 'showroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your price is higher than the yard in Qaboun. I have been buying '
            + 'from you for four years and I would rather stay.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then let me put three things on the table and you choose. If you '
            + 'take a tonne instead of half, we will do it at the tonne price — '
            + 'about five per cent.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I have nowhere to put a tonne.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the second. If you pay inside fifteen days, we will take one '
            + 'and a half per cent off.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Fifteen days is hard.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the third, and it costs us nothing. If you take a fixed '
            + 'delivery day, we will keep your sizes in stock, and you will never '
            + 'wait for a cut.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That one.' }
  ]
});

PBE4.scene('u19-19-4', {
  set: 'showroom',
  arr: 0,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'The bank has asked me for a reference from a long-standing '
            + 'customer. Would you write one?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Gladly. What does the bank want to know?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Whether I am real, I think. They always say "a trading reference".' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then three facts, and no adjectives. We have bought from you for '
            + 'eleven years, since March 2015. We have placed about four hundred '
            + 'orders in that time. And in March, when the Aleppo road was closed '
            + 'for nine days, you telephoned us before we telephoned you and put '
            + 'thirty rolls on a bus.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'You could say I am reliable.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody writes reliable. It is worth nothing because it is free. '
            + 'The nine days cannot be invented and it is the only sentence the '
            + 'bank will remember.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And the four per cent?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Is between us, and it is why I will say yes if you ever ask me for '
            + 'a reference again.' }
  ]
});

PBE4.scene('u19-19-4-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The bank has asked me for a reference from a long-standing '
            + 'supplier. Would you write one?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Gladly. What do they want to know?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Whether I am real, I think.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then three facts, and no adjectives. You have bought from us for '
            + 'nine years, since 2017. About seventy million of trade. And the '
            + 'month you paid early, unasked, because you had heard we were '
            + 'short.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You could say I am a good customer.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Everybody writes good customer. The early payment cannot be invented.' }
  ]
});

PBE4.scene('u19-19-5', {
  set: 'showroom',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Two quotations for the new size. Tell me about them without using '
            + 'the word good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Barakat is cheaper by nine per cent. They are quick — same day if '
            + 'you telephone before ten — and they are careless. Three of the '
            + 'last ten deliveries had something wrong: a wrong size once, short '
            + 'twice.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the other?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Shamsi is dearer and she has had two problems in eleven years. Her '
            + 'lead time is four days and it is four days. She has never been '
            + 'late without telephoning first.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So one is cheap and careless and one is dear and certain.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes. And the nine per cent is about 400,000 a year on this line. '
            + 'Three wrong deliveries a year cost us more than that in telephone '
            + 'calls and a customer who waited.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then you have answered it with a number rather than an adjective, '
            + 'which is what I asked for. Put both quotations in the file with '
            + 'that sentence at the top.' }
  ]
});

PBE4.scene('u19-19-5-pair', {
  set: 'showroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Two carriers for the Homs run. Tell me about them without using '
            + 'the word good.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The first is cheaper by fifteen per cent. They are quick and they '
            + 'are careless — two consignments lost last year.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the other?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Dearer, nothing lost in six years, and they telephone when a lorry '
            + 'is delayed instead of letting the customer telephone us.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So one is cheap and careless and one is dear and certain.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Yes. Fifteen per cent is about 700,000 a year. The two lost loads '
            + 'cost 1.2 million and a customer.' }
  ]
});

PBE4.scene('u19-19-6', {
  set: 'showroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Then let us agree on the four things. Three hundred rolls a quarter.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Three hundred a quarter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three per cent off the hundred price, and we pay within ten days.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Within ten days. If a payment is late, the three per cent does not '
            + 'apply to that order — I am not taking it away for ever, only for '
            + 'that one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is fair and I would have asked for the same. The price held '
            + 'until the end of December, unless the exchange rate moves more '
            + 'than ten per cent.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And delivery — shall we say the first week of each quarter, and I '
            + 'will telephone you in the last week of the one before?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Let us leave the day open. Some quarters I have a lorry coming '
            + 'this way and some I do not. If you let me choose the day inside '
            + 'that week, you will get it cheaper and I will not have to charge '
            + 'you for a lorry that is half empty.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then that stays open, on purpose. So, to confirm — I am writing '
            + 'this down as I say it…' }
  ]
});

PBE4.scene('u19-19-6-pair', {
  set: 'showroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Then let us agree on the four things. Four payments of six hundred thousand.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Four payments of six hundred thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On the fifteenth of each month, starting in March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The fifteenth. If one is late, the arrangement does not end — but '
            + 'the last payment moves, it is not forgiven. I am not taking the '
            + 'plan away for one bad month.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is fair and I would have asked for the same. The plan runs to '
            + 'June and we review nothing before then.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Agreed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And how you pay — shall we say by transfer?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Let us leave that open. Some months cash is all I have, and a '
            + 'transfer I cannot make is worse than cash you did not want.' }
  ]
});

PBE4.scene('u19-19-7', {
  set: 'showroom',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The new quotation is cheaper. Three thousand nine hundred against '
            + 'four thousand five hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read me the three lines under the price.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"Ex works. Minimum order 500. Payment with order."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then it is not cheaper. Ex works means we collect it from Aleppo '
            + 'ourselves — that is a lorry, a day and a driver, about 600,000 a '
            + 'trip. Minimum 500 means we buy five times what we use in a '
            + 'quarter. And payment with order means we pay before we have seen '
            + 'it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So the price is not the price.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The price is the price of the boxes standing in their yard. '
            + 'Shamsi\'s four thousand five hundred is the price of the boxes '
            + 'standing in our yard, a hundred at a time, paid thirty days later.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Then why send it at all?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Because it is a real offer to a bigger company than us. It is not '
            + 'a trick; it is addressed to somebody else. What it is asking us '
            + 'is: are you big enough yet? And this year the answer is no.' }
  ]
});

PBE4.scene('u19-19-7-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'That is two hundred a ream cheaper. Two hundred times two hundred '
            + 'reams is forty thousand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read me the lines under the price.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '"Ex works Homs. Minimum 200 reams. Payment with order. Price valid 7 days."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it is not cheaper. Ex works Homs is a day of the van and a '
            + 'driver — call it 400,000. Minimum two hundred is four months of '
            + 'paper in a store room that has no room. Payment with order means '
            + 'we pay now and we have been paying in thirty days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the seven days?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Means we have to decide before we have counted anything, which is '
            + 'how these quotations work. It is a real offer to somebody with a '
            + 'lorry going to Homs anyway. That is not us.' }
  ]
});

PBE4.scene('u19-19-7-b', {
  set: 'showroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'So, to confirm — three hundred rolls a quarter, three per cent '
            + 'below the hundred price, and we pay within ten days of invoice.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And if a payment is late, the three per cent does not apply to '
            + 'that order — only to that one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Understood. The price held until the end of December, unless the '
            + 'exchange rate moves more than ten per cent.' },
    { who: 'shamsi', cam: { shot: 'close' },
      en: 'And the delivery day inside the first week stays open, so that I '
            + 'can use a lorry that is already coming this way.' }
  ]
});
