/* Unit 6 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u6-6-1', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Nine rules on your wall. Sort them: which are yours and which are '
            + 'the law\'s?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The gate count is ours. The fourteen-day price is ours. Keeping '
            + 'the invoices is the law. The registration certificate on the wall '
            + 'is the law.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And the two signatures over 500,000?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours. Mr Ayoub\'s father\'s.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Good. And the stock count?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours — quarterly, because we always have.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That one is both, and that is the interesting case. You have to '
            + 'count the stock before the year end because of the accounts. The '
            + 'quarterly part is yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So half a rule.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Most rules are. And here is why the sorting matters: next month '
            + 'somebody will come to you and ask for one of these nine to be '
            + 'relaxed. If it is yours, that is a conversation. If it is the '
            + 'law\'s, it is not a conversation and you should not let them think '
            + 'it is, because the kindest thing you can say is I cannot.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I do not know which it is?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Then say so and find out before you answer. ⚠ Saying that is the '
            + 'law about a rule of your own is the worst of the three outcomes — '
            + 'it works once and then somebody checks, and after that nothing you '
            + 'say about any rule is believed.' }
  ]
});

PBE5.scene('u6-6-1-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Four rules on the delivery board. Which are yours and which are the law\'s?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Sheeting the load is ours. The weights are the law. The four-hour '
            + 'break is the law. Washing the lorry on Fridays is ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Sheeting is the law as well.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For an open load on a public road, yes. ⚠ And you have been '
            + 'enforcing it as a company preference, which means somebody has '
            + 'argued with you about it and you have had the weaker half of the '
            + 'argument.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So three of four are the law.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And the one that is yours is the washing, which is the one '
            + 'everybody assumes is a regulation.' }
  ]
});

PBE5.scene('u6-6-2', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'You told me I did not have to get the second signature on the credit notes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Under 100,000, yes.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So I have been signing them on my own for six weeks. Including the '
            + 'one for 240,000 on Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…That one you mustn\'t.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'You did not say mustn\'t. You said I did not have to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'About the small ones.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'You said you do not have to get Nadia to sign these, and you were '
            + 'holding a stack of them, and I took it to mean credit notes.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'May I. ⚠ You do not have to removes a duty. You must not creates '
            + 'one. They are not stronger and weaker versions of each other — '
            + 'they point in opposite directions, and the gap between them is '
            + 'where both of you have been working for six weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should I have said?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Two sentences instead of one. You do not have to get a second '
            + 'signature below 100,000. You must not sign anything above it on '
            + 'your own. ⚠ The figure, and then both halves. Either half on its '
            + 'own is an instruction to guess.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the 240,000?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Is a real finding and goes in my file, and it is not yours. You '
            + 'were told the half you were told.' }
  ]
});

PBE5.scene('u6-6-2-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You told me I did not have to ask you about discounts.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Up to five per cent on the counter, yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So I have been giving discounts for six weeks without asking. '
            + 'Including fifteen per cent on Mr Haffar\'s standing order.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That one you mustn\'t.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You did not say mustn\'t. You said I did not have to ask.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About the counter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You said you do not have to ask me about discounts, and I took it '
            + 'to mean discounts.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'What I should have said is: up to five per cent on the counter you '
            + 'do not have to ask; above five, or on anything on a standing '
            + 'order, you must not agree it yourself.' }
  ]
});

PBE5.scene('u6-6-3', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'What are you authorised to sign?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Credit notes, purchase orders, and small amounts generally.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Up to what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It has never been written down.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then you are not authorised to sign anything, and neither is '
            + 'anybody else here, and I have to write that. An authority needs '
            + 'two things: a figure and a thing. Small amounts generally is not '
            + 'an authority; it is an atmosphere.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In practice I sign up to about 250,000 and ask above that.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'In practice is the right phrase and it is not an authority either. '
            + 'Who told you 250,000?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody. It is what feels right, and nobody has ever queried it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is the commonest answer I get and it is worth understanding '
            + 'what it costs. It costs you the protection. If a payment you '
            + 'signed goes wrong at 240,000 and nobody wrote the limit, the '
            + 'question is not whether you were within it — there is no it. The '
            + 'question becomes your judgement.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And with a written limit?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'With a written limit the question is arithmetic. A written '
            + 'authority is not a restriction on you; it is the only thing that '
            + 'can defend you. ⚠ The people who resist writing their limits down '
            + 'are almost always the people the limits would protect.' }
  ]
});

PBE5.scene('u6-6-3-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What are you authorised to order?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Packaging, pallets, small tools. Whatever the yard needs.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Up to what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody has ever said. I stop at about forty thousand and come and ask.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the two at a hundred and fifty?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Urgent repairs. Nobody said anything afterwards.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Which you have read as approval, and it is not. It is nobody '
            + 'having looked.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It has been eleven years.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then eleven years is your evidence and you should ask for the '
            + 'figure to be written, not wait to be given it.' }
  ]
});

PBE5.scene('u6-6-4', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    tarabishi: { rig: 'm-50s-b', name: 'Mr Tarabishi', voice: 'en-NZ-MitchellNeural', shirt: '#7a5a3f', shirt2: '#604832',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'tarabishi', cam: { shot: 'wide' },
      en: 'Eight per cent on the trade order. You gave me five last time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Five is my limit on trade. Eight is not mine to decide — it is Mr Ayoub\'s.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'You said that last time and then it was five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Last time you asked for five, which was mine. This time you have '
            + 'asked for eight, which is not, and I am not going to pretend the '
            + 'line has moved because you have asked twice.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'So you cannot help me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I can do three things. I can put eight per cent to him with the '
            + 'figures — your volume this year and the two orders you brought us '
            + 'in August. I can tell you he has said yes to eight once that I '
            + 'know of, in 2024, for a bigger order than this. And I can give you '
            + 'five today in writing, so that if he says no you have not lost two '
            + 'weeks.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'And if he says no?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then it is five, and I will tell you why he said no, which is more '
            + 'than you would get from most people.' },
    { who: 'tarabishi', cam: { shot: 'mid' },
      en: 'You could just give me the eight and sort it out afterwards.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I could, and he would honour it, and that is exactly why I am not '
            + 'going to. ⚠ The next person who asks me for eight would get it '
            + 'too, and then five would not mean anything and neither would I.' }
  ]
});

PBE5.scene('u6-6-4-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Sixty days. We have paid you on the nail since 2019.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have, and I have the ledger to prove it. Thirty is my limit. '
            + 'Sixty is not mine to decide — it is Mr Ayoub\'s.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So you cannot help me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I can do three things. I can put sixty to him with your payment '
            + 'record — forty-one invoices, none late. I can tell you that sixty '
            + 'was given once, in 2023, to a customer who then failed, so he will '
            + 'be cautious and the reason will not be you. And I can give you '
            + 'thirty with a fortnight\'s grace in writing today, so that if he '
            + 'says no you are no worse off than this morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if he says no?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is thirty with the grace, and I will tell you his reason.' }
  ]
});

PBE5.scene('u6-6-5', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, would it be all right if I signed credit notes up to '
            + '250,000 instead of 100,000?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three reasons, and one of them is awkward. The first: I have '
            + 'raised sixty-one credit notes this year and forty-three were above '
            + '100,000, so the limit has stopped meaning anything — it just means '
            + 'a queue at your door. The second: the figure was set when the '
            + 'counter took a tenth of what it takes now.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the awkward one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'For six weeks Hala signed credit notes above the limit because I '
            + 'gave her half an instruction. Every one was correct. I am not '
            + 'asking you to approve what happened — it is recorded and Mr Attar '
            + 'has it. But it is six weeks of evidence about the right figure and '
            + 'it would be dishonest to use the first two reasons and not that '
            + 'one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Two fifty, then. With the countersignature above it and nothing '
            + 'else changed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And if you had come in and asked for a higher limit without the '
            + 'sixty-one and the forty-three, I would have said I would think '
            + 'about it, and I would not have thought about it, and you would '
            + 'have asked again in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is roughly what happened in March.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'It is. ⚠ The difference is that this time you brought me a '
            + 'decision to make rather than a favour to grant. They feel entirely '
            + 'different from this side of the desk and nobody ever says so.' }
  ]
});

PBE5.scene('u6-6-5-pair', {
  set: 'noticeboard',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Would it be all right if the counter discount were a figure '
            + 'instead of five per cent?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two reasons and one awkward one. Five per cent of a small sale is '
            + 'nothing. Five per cent of a pallet is 42,000, which is more than '
            + 'my credit-note limit — so I can give away more in a discount than '
            + 'I am allowed to credit back.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the awkward one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have given five per cent on two pallets without working out what '
            + 'it came to. Both are done and recorded. I am not asking you to '
            + 'undo them; it is evidence that the percentage is the wrong shape.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'A figure, then. What figure?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Twenty thousand, with percentage below that, and nothing else changed.' }
  ]
});

PBE5.scene('u6-6-6', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'Thirty days. I have supplied you since 2019 and I am asked for thirty days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You are, and it is new, and it is not mine. Mr Ayoub set it in '
            + 'September for every supplier without exception.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And you think it is right?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. I think it is wrong for you specifically, because you have '
            + 'never once been late with anything and because you carry our stock '
            + 'in Aleppo at your own cost. I said so, in writing, before it went '
            + 'out. ⚠ And it is still thirty days.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Then what use is your opinion to me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two uses. It tells you the rule is not about you, which it would '
            + 'be easy to assume. And it means that when I tell you something is '
            + 'my judgement, you will know the difference.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Most people in your position say it is the policy and look sorry.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Most people in my position are hoping you will go away. ⚠ If I say '
            + 'I am afraid it is the policy, I have made the rule sound like '
            + 'weather, and you cannot argue with weather — so you will argue '
            + 'with me instead, for twenty minutes, and the answer at the end '
            + 'will still be thirty days.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And if I write to Mr Ayoub?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then write to him, and I will send you the paragraph I sent him in '
            + 'September so you are not making the case from nothing. That is not '
            + 'disloyalty; he knows what I think. ⚠ What I will not do is tell '
            + 'you I agree when I do not, because then he and I would be saying '
            + 'different things and you would believe neither of us.' }
  ]
});

PBE5.scene('u6-6-6-pair', {
  set: 'noticeboard',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Fadi has taken cash back from me for four years. Now he says he cannot.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He cannot. Mr Ayoub set it in September, for every customer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And you think that is right?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I think it is right, and I will tell you why rather than hiding '
            + 'behind him. Fadi is alone in a van with other people\'s money and '
            + 'no safe. If something goes missing between your shop and our '
            + 'office, the only person who cannot prove anything is Fadi. ⚠ The '
            + 'rule protects him from us, not us from you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody put it like that.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody put it at all, which is the fault. The letter went to you '
            + 'and not to him, and he had been carrying your cash for four years '
            + 'without knowing he should not.' }
  ]
});

PBE5.scene('u6-6-7', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'Four pages of terms of business. Which of it is mine?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Almost none. Clause 4 is yours — the goods are signed for against '
            + 'the order at the point of delivery.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'That is the gate sheet at our end. At their end I sign their note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You sign theirs and they sign ours. Both.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And clause 9? No cash or other payment shall be accepted by the carrier.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is yours too, and I had it down as the office\'s. It means '
            + 'you must refuse money, every time, including when a customer puts '
            + 'it in your hand in the street and will not take it back.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Which happens about twice a month. Mr Haffar does it and he is seventy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What do you do now?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'I take it and I bring it in and Nadia writes it on the sheet. '
            + 'Nobody has ever said not to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then clause 9 has been breached twice a month for a year by '
            + 'somebody who was never told it existed, and that is not your '
            + 'fault, it is mine — the terms went to the customers and not to '
            + 'you.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And what do I do when he puts it in my hand?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The terms do not say. They say you must not accept it. They do '
            + 'not say what to do when it is already in your hand and the man is '
            + 'seventy and will be hurt.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'That is the only part I actually needed.' }
  ]
});

PBE5.scene('u6-6-7-pair', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'write', hold: 'pen' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Clause 11: no goods shall be left without a signature.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The shop on the corner is shut half the time. I leave them with '
            + 'the pharmacist next door.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How long have you been doing that?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two years. Nothing has ever gone missing and the pharmacist signs for them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He signs?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In his own name. I have two years of signatures from a man who '
            + 'does not work there.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then you have been complying with the clause and breaching it at '
            + 'the same time, and the terms do not say whether a neighbour\'s '
            + 'signature counts. ⚠ Until they do: keep doing it, keep the '
            + 'signatures, and write the pharmacist\'s name on the sheet rather '
            + 'than just a signature — that is mine, not the terms\'.' }
  ]
});

PBE5.scene('u6-6-7-b', {
  set: 'noticeboard',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'point' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, would it be all right if the credit-note ceiling went '
            + 'from 100,000 to 250,000 — for me, Nadia and Hala?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sixty-one credit notes this year and forty-three of them above the '
            + 'ceiling, so it has stopped meaning anything. None of the sixty-one '
            + 'was wrong in amount.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And one reason that does not help me. For six weeks Hala signed '
            + 'nine of them above the limit, the largest 240,000, because I gave '
            + 'her half an instruction. All nine were correct. I am not asking '
            + 'you to approve them — they are recorded and Mr Attar has them.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'I am not asking for a payment-out authority, I am not asking about '
            + 'discounts, and the countersignature above the ceiling stays '
            + 'exactly as it is.' }
  ]
});
