/* Unit 23 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u23-23-1', {
  set: 'rooftop',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'For the profile: "Sham Trading are founded in 1998."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Were founded. The founding happened once, in 1998, and it is '
            + 'finished — so the past: Sham Trading was founded in 1998.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And then "We work here since 1998."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'We have been here since 1998. Since needs the present perfect, '
            + 'because it joins 1998 to today. Or count the years: we have been '
            + 'here for 28 years.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Since the year, for the number.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Exactly that. And put the move in. Founded in 1998 in Bab Touma; '
            + 'moved to Mezzeh in 2011.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Does anybody care where we were before?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'A customer of twenty years cares, because he knew the old shop. '
            + 'And a stranger reads it as a company that has survived something, '
            + 'which is true and is worth more than any adjective you could put '
            + 'there instead.' }
  ]
});

PBE4.scene('u23-23-1-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the profile: "Nassif Brothers are founded in 1974."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Were founded. The founding happened once, in 1974, and it is finished.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then "We are here since 40 years."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We have been here for forty years. Since needs a point — since '
            + '1974 — and for needs a length. Both take have been.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Since the year, for the number.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Exactly that. And put the two moves in — a company that has moved '
            + 'twice and is still trading has told the reader something no '
            + 'adjective can.' }
  ]
});

PBE4.scene('u23-23-2', {
  set: 'rooftop',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The new customer asked what the Mezzeh store is like. I said it is '
            + 'very good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which tells her nothing. What is there?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'There is a counter, there are two store rooms, there is a '
            + 'generator, and there is parking for three cars in front.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a store. Now what is there not?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Why would I tell her that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because she is bringing a van and there is no loading bay, and '
            + 'there is no lift to the first-floor store room. If she finds that '
            + 'out on Tuesday with a van and a driver waiting, we have cost her '
            + 'an hour. If she knows today, she brings two men instead.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So: there is no loading bay and there is no lift.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And there is a generator, which matters more than either of them '
            + 'in July. Say both halves. A place described only by what it has '
            + 'sounds like a place somebody is selling.' }
  ]
});

PBE4.scene('u23-23-2-pair', {
  set: 'rooftop',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The engineer asked what the workshop is like. I said it is very good.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which tells him nothing. What is there?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There are three machines, there is a yard, and there is a generator.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a workshop. Now what is there not?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why would I tell him that?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because the gate is too narrow for a lorry and there is no '
            + 'telephone line. If he finds that out on Tuesday with a lorry at '
            + 'the gate, we have cost him the morning.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'So: there is no telephone line, there is no shade in the yard, and '
            + 'the gate takes a van but not a lorry.' }
  ]
});

PBE4.scene('u23-23-3', {
  set: 'rooftop',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'For the second store, Homs is much better than Aleppo.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Better in what way? Better with nothing after it is an opinion '
            + 'wearing a comparative.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The rent is cheaper.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'How much cheaper?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'About forty per cent cheaper than Aleppo, for the same floor area.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now that is a comparison. What else?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is nearer to us — two hours instead of five. But the market is '
            + 'smaller, and it is further from the port.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So it is cheaper, nearer and smaller. Three comparisons, two for '
            + 'it and one against, and I can decide. "Much better" tells me only '
            + 'that you have already decided and would like me to agree.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if I think it really is better overall?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then say so at the end, after the three, and say it as yours: on '
            + 'balance I would choose Homs. The comparisons are facts; the '
            + 'conclusion is yours, and the two should not be wearing the same '
            + 'clothes.' }
  ]
});

PBE4.scene('u23-23-3-pair', {
  set: 'rooftop',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the second supplier, Latakia is much better than Aleppo.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better in what way? Better with nothing after it is an opinion '
            + 'wearing a comparative.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Latakia is nearer the port.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How much nearer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the port — nothing to road at all, against four hours from Aleppo.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now that is a comparison. What else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The price is about the same. But the choice is narrower, and my '
            + 'cousin works there, which I should have said first.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So it is nearer, the same price, narrower, and you have an '
            + 'interest. Now I can decide — and the last part is what makes me '
            + 'trust the first three.' }
  ]
});

PBE4.scene('u23-23-4', {
  set: 'rooftop',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'For the profile: "We make the labels in Homs and then we send them '
            + 'to Beirut."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fine, if the we matters. Does it?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Not really. The customer wants to know where the labels come from.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then take the person out: the labels are printed in Homs and sent '
            + 'to Beirut. That is the passive, and this is exactly what it is for '
            + '— when the what matters and the who does not.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It feels like hiding.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It can be. A mistake was made — that is hiding, and we spent a '
            + 'week on it in Unit 15. The labels are printed in Homs is not '
            + 'hiding; nobody wants the printer\'s name.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And for last year: "the labels were printed in Aleppo"?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Yes — was and were for the past. And please, printed, not '
            + 'printeded, and never maked. The passive is be plus the third form, '
            + 'and the third form is the one worth learning by heart: make, made, '
            + 'made.' }
  ]
});

PBE4.scene('u23-23-4-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the report: "A delivery note was signed and the load went to '
            + 'the wrong address."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Signed by whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is the problem — nobody knows.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the passive is hiding the only fact that matters. Write what '
            + 'you know: the note has no name on it, so we cannot tell who '
            + 'checked the load.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That sounds worse.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is worse, and it is true, and it points at the fix. Was signed '
            + 'points at nothing. The passive is for processes; this is not a '
            + 'process, it is a gap.' }
  ]
});

PBE4.scene('u23-23-5', {
  set: 'rooftop',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The paragraph about the city: "Because of the situation, business '
            + 'is very difficult. Because of the power cuts, we cannot work. '
            + 'Because of the roads, deliveries are late."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Every sentence is grammatically right and the paragraph is '
            + 'useless. Who would read that and want to deal with us?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'But it is all true.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is true and it is half of each sentence. There are power cuts; '
            + 'what do we do? We have a generator and it runs from one until '
            + 'four. The roads are slow; what do we do? We deliver to the Ghouta '
            + 'on two fixed days instead of promising any day.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So: because of the power cuts, we run a generator from one until four.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a company. The other version is a complaint. And take out '
            + 'the situation — it means nothing to a stranger and everything to '
            + 'us, which is the worst combination in a document somebody else '
            + 'will read.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What do I put instead?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'The actual difficulty. Power cuts, the exchange rate, a licence '
            + 'that takes nine weeks. Name them one at a time and answer each '
            + 'one. A reader will forgive every single difficulty on that list if '
            + 'each one has an answer after it.' }
  ]
});

PBE4.scene('u23-23-5-pair', {
  set: 'rooftop',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The paragraph: "Because of the circumstances, everything is '
            + 'difficult. Because of the situation, we cannot plan."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Every sentence is grammatically right and the paragraph is '
            + 'useless. Name one of them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The electricity.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. There are cuts; what do we do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We run the press in the morning and do the paperwork in the afternoon.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So: because of the cuts, the press runs in the morning and the '
            + 'paperwork is done in the afternoon. Now name the second one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The licence. It takes nine weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And so?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'And so we start it before the first order, not after it.' }
  ]
});

PBE4.scene('u23-23-6', {
  set: 'rooftop',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Did you read about the new rule? Imported packaging has to be '
            + 'labelled in Arabic from June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Where did you read it?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Somebody put it in the traders\' group this morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then say that first, before the rule. Apparently — it was in the '
            + 'traders\' group — imported packaging has to be labelled in Arabic '
            + 'from June. Now I know how much to believe.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It might be in the official gazette too. I am not sure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is two different things: what you read, and what you '
            + 'think. Keep them apart. It says in the group that… and I think it '
            + 'may also be official, but I have not seen it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And what does it mean for us?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'That is the third sentence, and it is the one I actually need: if '
            + 'it is true, about a third of what we import needs a new label by '
            + 'June. Source, then content, then what it means for us. In that '
            + 'order, every time.' }
  ]
});

PBE4.scene('u23-23-6-pair', {
  set: 'rooftop',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Did you read about the wrap price? It is going up thirty per cent '
            + 'in September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where did you read it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A customer told me this morning. He heard it from his importer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that first. Apparently — a customer heard it from his '
            + 'importer — imported wrap rises thirty per cent in September. Now I '
            + 'know how much to believe.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It might be in the trade press too. I am not sure.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is two things: what you were told, and what you think. '
            + 'Keep them apart.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And what does it mean for us?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is the third sentence and it is the one I need: every price '
            + 'we are holding for fourteen days is a price we may be filling at '
            + 'the new cost.' }
  ]
});

PBE4.scene('u23-23-7', {
  set: 'rooftop',
  arr: 0,
  cast: {
    visitor: { rig: 'f-30s-h', name: 'Visitor', voice: 'en-AU-NatashaNeural', shirt: '#7a6a9a', shirt2: '#62547b',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'visitor', cam: { shot: 'wide' },
      en: 'I have read your page about doing business here. Power cuts, slow '
            + 'roads, nine weeks for a licence. It sounds very difficult.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is difficult. The page is not there to say it is easy; it is '
            + 'there to say that we know exactly which four things are difficult '
            + 'and what we do about each one.' },
    { who: 'visitor', cam: { shot: 'mid' },
      en: 'Most companies send me a page saying everything is excellent.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then the first difficulty arrives and you find out they had no '
            + 'plan for it, because they had not admitted it existed. Ours says: '
            + 'cuts every afternoon, so the generator runs from one until four; '
            + 'slow roads, so the Ghouta is Tuesdays and Thursdays only; prices '
            + 'held fourteen days, in writing, and no longer.' },
    { who: 'visitor', cam: { shot: 'mid' },
      en: 'So the difficulties are the argument.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The answers are the argument. The difficulties are everybody\'s — '
            + 'yours too, in a different shape. If you take one sentence away, '
            + 'take that one: none of the four is going to be solved by us, and '
            + 'all four are planned around.' }
  ]
});

PBE4.scene('u23-23-7-pair', {
  set: 'rooftop',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The other distributor sent me a page saying they are the leading '
            + 'supplier in Syria and everything is excellent. Yours sent me four '
            + 'problems.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is a fair reaction. Ask yourself one question about their page: '
            + 'what will they do in August when the power goes at one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Presumably the same as you.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Possibly. But they have not written it down, which means nobody in '
            + 'their office has had to agree what it is. Ours is written down, so '
            + 'Hala and the driver and I all give you the same answer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I ask them and they have a good answer?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then take them. I am not asking you to prefer the pessimist. I am '
            + 'asking you to compare the answers, not the adjectives — and only '
            + 'one of the two pages has any answers on it to compare.' }
  ]
});

PBE4.scene('u23-23-7-b', {
  set: 'rooftop',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sham Trading was founded in 1998 as a packaging workshop in Bab '
            + 'Touma, with four people and one machine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We moved to Mezzeh in 2011 and we have been in the same premises '
            + 'since then. We employ nineteen people.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'There is parking for three cars in front, but there is no lift — '
            + 'the first-floor store room is eleven steps up and everything is '
            + 'carried. Because of the power cuts we run a generator from one '
            + 'until four.' }
  ]
});
