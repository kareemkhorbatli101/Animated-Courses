/* Unit 17 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u17-17-1', {
  set: 'archive',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'The gate sheet is signed by the person who counted, by name. When '
            + 'did that start?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is company procedure. It is in the Baghdad Street file.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And before that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Before that — we used to sign at the gate without counting first. '
            + 'The sheet used to be a record that a load had gone, not a record '
            + 'that it had been counted.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'When did it change?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…During the Baghdad Street opening. Some time in the summer.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which summer, and what date?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I cannot give you a date.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then here is the problem, and it is not about the gate. Your '
            + 'current procedure is good. I can see it, I can test it, and I '
            + 'have. What I cannot do is audit the three months before it, ⚠ '
            + 'because nobody can tell me whether a sheet from May was signed '
            + 'under the old practice or the new one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Both kinds of sheet look identical.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Both kinds of sheet are identical. ⚠ A change with no date is not '
            + 'a change; it is a gradual difference in what people do — and for '
            + 'three months in the middle, half the sheets mean one thing and '
            + 'half mean another, and nothing on the paper says which.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what should we have written?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ One line: from 8 June the gate sheet is signed by the person who '
            + 'counted; before that it recorded despatch only. ⚠ Eighteen words, '
            + 'an effective date, and the old practice named — and three months '
            + 'of sheets become readable instead of ambiguous.' }
  ]
});

PBE6.scene('u17-17-1-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'A price is held fourteen days, in writing, with the date on it. '
            + 'When did that start?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is procedure. It is in the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And before that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Before that a price used to be held until the customer came back, '
            + 'which in practice meant for ever.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When did it change?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…After a customer came back with a two-year-old quotation. I '
            + 'cannot give you a date.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then nobody can tell whether an undated quotation in circulation '
            + 'is live or dead — and there are undated quotations in circulation.' }
  ]
});

PBE6.scene('u17-17-2', {
  set: 'archive',
  arr: 1,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'Why does the trade counter open at seven? Nobody comes until half '
            + 'past eight.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Mr Habib. He was here from 1998 until 2014, and he would open the '
            + 'shutter at seven every morning, including Fridays.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because until about 2006 the bakery two doors down took deliveries '
            + 'at a quarter past seven and he would sell them wrap. ⚠ He would '
            + 'also sweep the pavement at seven, and he would make tea for the '
            + 'first customer, whoever it was.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the bakery?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Closed in about 2008.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So we have opened at seven for seventeen years for a bakery that '
            + 'closed seventeen years ago.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'We have. ⚠ And here is the part that matters: of the three things '
            + 'he would do, one has survived and two have not — we open at seven '
            + 'and nobody sweeps and nobody makes tea.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Why that one and not the others?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Because opening at seven is in the rota and the other two were '
            + 'in him. The sweeping and the tea stopped the week he left. The '
            + 'shutter time was written in a document, ⚠ so it outlived the '
            + 'reason, the man, and the bakery.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That sounds like an argument for not writing things down.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It is an argument for writing the reason down next to the thing. '
            + 'If the rota had said seven, for the bakery delivery at 7.15, '
            + 'somebody would have crossed it out in 2008. ⚠ A rule with its '
            + 'reason attached can die when the reason does. A rule on its own '
            + 'cannot die at all.' }
  ]
});

PBE6.scene('u17-17-2-pair', {
  set: 'archive',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Why do we make two carbon copies of every order? Nobody takes the '
            + 'second one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The Thursday bookkeeper. He would come in on a Thursday and take '
            + 'the second copies for the week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And where is he?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He retired in 2016.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ So for nine years we have made about forty second copies a week '
            + 'for nobody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'About nineteen thousand sheets. They are in a box in the store and '
            + 'the box has not been opened.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ And it is in a document rather than in a person, which is why it '
            + 'survived him.' }
  ]
});

PBE6.scene('u17-17-3', {
  set: 'archive',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'How is the seventh week?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'The work is fine. ⚠ I am not used to being asked for by name. Mr '
            + 'Haffar telephoned and asked for Lina, and I did not know what to '
            + 'do with the question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did you do?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I said speaking and then I could not remember anything about his account.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You will get used to it. I am used to it and I was not in my first year.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'May I say something about that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ You are used to things that I do not think anybody should be '
            + 'used to. You are used to the generator going off at four and you '
            + 'do not plan round it any more; you work until it goes and then you '
            + 'stop. You are used to the Ghouta run being Tuesdays and Thursdays '
            + 'and you have never asked why.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The generator runs from one until four. Everybody knows that.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ You are used to a three-hour window and I am used to '
            + 'electricity, so I notice it and you do not. ⚠ And being used to '
            + 'something is the same thing as not seeing it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the Unit 13 finding in a different coat.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'It is. ⚠ But there are two kinds and that is what I wanted to say. '
            + 'Being used to the generator is harmless — it is a fact and nobody '
            + 'can change it. ⚠ Being used to the Ghouta being Tuesdays and '
            + 'Thursdays is not harmless, because somebody could change it and '
            + 'nobody has asked.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the test between them?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Could it be otherwise? If it could not, being used to it is just '
            + 'competence. ⚠ If it could, being used to it is the reason it has '
            + 'not been.' }
  ]
});

PBE6.scene('u17-17-3-pair', {
  set: 'archive',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Six things. The generator hours.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Could not be otherwise. Competence.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The counter opening at seven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Could be. Nobody has asked since about 2008.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two carbon copies. The gate sheet signed weekly. The Ghouta days. '
            + 'The price list dated on the front sheet only.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ All four could be otherwise. ⚠ So five of the six are questions '
            + 'nobody has asked, and one is a fact.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And who could change the five?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Me, for three of them.' }
  ]
});

PBE6.scene('u17-17-4', {
  set: 'archive',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Two sites. It is eight months. Are you used to it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am getting used to it. The first month I drove between them '
            + 'about nine times a week and did almost nothing at either.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twice a week, Tuesdays and Fridays, and I do the Baghdad Street '
            + 'work in the morning and come back. ⚠ So I am not used to it and I '
            + 'am no longer not used to it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'There are four stages and you have named three of them. Not used '
            + 'to it. Getting used to it. Used to it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Not noticing it. And the fourth is the dangerous one, because at '
            + 'the third stage you still know that two sites is a thing that '
            + 'costs you something. ⚠ At the fourth stage you do not, and you '
            + 'stop telling anybody about it — and then next year somebody asks '
            + 'why administration takes so long and nobody says because one '
            + 'person is in two buildings.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long does the fourth stage take?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ About a year, in my experience, and it is not a weakness; it is '
            + 'what being good at something is. ⚠ The repair is to write the cost '
            + 'down while you can still feel it — which is now, in month eight, '
            + 'and not in month fourteen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Write what down?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Two sentences. ⚠ What it costs, in hours or in things not done, '
            + 'and ⚠ what would have to be true for it to stop costing that. ⚠ '
            + 'Then put a date on it and look at it in a year, because in a year '
            + 'you will read it and not recognise the person who wrote it.' }
  ]
});

PBE6.scene('u17-17-4-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The two price lists. Is that all right?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is fine. We manage.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ How many times a week does somebody look at the wrong one?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Once or twice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how long does it take to find out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Until the customer queries the invoice, usually. ⚠ So about four days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So twice a week somebody quotes a wrong price and we find out '
            + 'four days later, and you have just told me it is fine.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ It is fine in the sense that I have stopped noticing it. Those '
            + 'are not the same thing, and I did not hear myself say it.' }
  ]
});

PBE6.scene('u17-17-5', {
  set: 'archive',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The change note says we used to sign the gate sheet without '
            + 'counting the load.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Who is we?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody. Abu Yasser mostly.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So a document that will be in the file in 2035 says that Abu '
            + 'Yasser signed sheets without counting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…It does say that.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And it is not what you mean. ⚠ You mean that the method did not '
            + 'require a count — which is a fact about a procedure, not about a '
            + 'man who followed it correctly for eleven years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: the gate sheet used to be signed at the gate, as a record of '
            + 'despatch; it was not required to be counted against the order.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Better. And now the test. ⚠ Is there anybody in this sentence?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then it is the right sentence for a change note and the wrong '
            + 'sentence for a post-mortem. In Unit 15 you learned that the code '
            + 'should have been checked owns nothing and names nobody, and that '
            + 'was a fault. Here it is the point.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I know which document I am writing?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ One question: is anybody supposed to do something as a result? A '
            + 'post-mortem asks somebody to change something, so it needs names. '
            + '⚠ A change note describes what the old method was so that old '
            + 'documents can be read — and nobody has to do anything, so names in '
            + 'it are only an accusation with a date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where the old method was genuinely somebody\'s fault?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then it is not a change note, and you are writing the wrong '
            + 'document. Put the fault in the post-mortem, with the name, ⚠ and '
            + 'leave the change note describing the method — because the change '
            + 'note will be read by strangers for twenty years and the '
            + 'post-mortem by four people this month.' }
  ]
});

PBE6.scene('u17-17-5-pair', {
  set: 'archive',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your change note says the quotations used to be left undated, '
            + 'which caused the Tarabishi dispute.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Both halves are true.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They are, and they belong in two documents. ⚠ Is anybody supposed '
            + 'to do something because of the first half?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is so that an old quotation can be read.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And because of the second half?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes — somebody has to decide what we do about undated quotations '
            + 'still in circulation.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then the first half is the change note and the second half is a '
            + 'post-mortem with a name and a date on it — and the dispute does '
            + 'not belong in a document that strangers will read for twenty '
            + 'years.' }
  ]
});

PBE6.scene('u17-17-6', {
  set: 'archive',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The change note. From 1 March the Ghouta run moves from Tuesdays '
            + 'and Thursdays to Mondays and Wednesdays.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'That is right and it is not enough. What do I tell the two '
            + 'customers who have planned round Tuesdays and Thursdays?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which two?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'The Ghouta bakery takes flour on a Tuesday morning and wants wrap '
            + 'the same day. And Mr Jaber\'s yard is shut on Mondays.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So one gains nothing and one loses a delivery day.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '⚠ The bakery can move to Monday, which is better for them. ⚠ Mr '
            + 'Jaber\'s yard is shut on Mondays, so from the 1st he has one '
            + 'delivery day a week instead of two, and nobody has told him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the note needs a fourth line: who is affected and what happens to them.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And a fifth, which is the one I actually want. ⚠ Why was it '
            + 'Tuesdays and Thursdays?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I asked. Nobody knows. The best answer is that a customer who left '
            + 'in 2019 took deliveries on those days.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '⚠ So two days of every week have been arranged for six years '
            + 'around a customer who is not there. Put that in the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It makes us look foolish.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '⚠ It makes the next change possible. If the note says the old days '
            + 'were set for a customer who left in 2019, then in three years when '
            + 'somebody asks why it is Mondays and Wednesdays, ⚠ there will be a '
            + 'line that says it was for the bakery and for Mr Jaber\'s Monday '
            + 'closing — and when the bakery closes, somebody will cross it out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is 17.2 again. The rule with its reason attached can die.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: '⚠ And the rule without it cannot. We have just spent six years '
            + 'proving that, and the note is two lines longer than it was.' }
  ]
});

PBE6.scene('u17-17-6-pair', {
  set: 'archive',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'From 1 April the trade counter opens at 08.00 instead of 07.00.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is right and it is not enough. Who comes before nine?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four customers. ⚠ And one of them has come at about ten past seven '
            + 'every day for years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does he know?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And why was it seven in the first place?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ For a bakery delivery at a quarter past seven, and the bakery '
            + 'closed in about 2008.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then both of those go in the note — and somebody telephones the '
            + 'ten-past-seven customer before it is circulated.' }
  ]
});

PBE6.scene('u17-17-7', {
  set: 'archive',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'There are three different gate sheets in the building.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is one gate sheet.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'There are three. The pad in the yard has a signature column and no '
            + 'date column. The pad at Baghdad Street has both. ⚠ And there is a '
            + 'box of about two hundred old ones in the store with neither — just '
            + 'a line for the load.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And which are being used?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'All three. The yard uses the yard pad. Baghdad Street uses theirs. '
            + '⚠ And when the yard pad runs out, Abu Yasser takes a block from '
            + 'the old box, because it is there and it is free.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So a sheet from last month could be any of three forms.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'It could, and I can show you one of each from February. ⚠ Nobody '
            + 'chose this. Nobody decided that three versions should be in use. '
            + 'The new pad was printed for Baghdad Street because they needed '
            + 'pads, and the old box has never been thrown away because nobody '
            + 'throws anything away.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which version is right?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The Baghdad Street one, and the people using the wrong one are '
            + 'the people who have been here longest — because they are used to a '
            + 'pad that lives in a drawer in the yard, and the right pad lives at '
            + 'the other site.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the whole unit in one sentence.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ And what nobody has written down is the thing that would end it '
            + 'in a morning. Not a note saying use the new sheet. ⚠ A note saying '
            + 'the old pads are withdrawn; the box in the store is to be '
            + 'destroyed; the yard pad is reprinted with a date column from the '
            + '1st. Three instructions, and one of them is to throw something '
            + 'away.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why has nobody written that?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Because a change note tells people what to do and nobody has '
            + 'ever written one that tells them what to get rid of — so every '
            + 'change we make adds a version and removes none, ⚠ and in eleven '
            + 'years that is three gate sheets, two price lists and a box of two '
            + 'hundred forms nobody will ever use and nobody will ever destroy.' }
  ]
});

PBE6.scene('u17-17-7-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'How many versions of the stock card are in use?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Where does it live?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In the store, on the shelf by the door. ⚠ And there is an older '
            + 'one in the office drawer that Nadia uses for the monthly figure.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Three. The one in the fourth store is a photocopy of the one '
            + 'before that, because the fourth store is across the yard and '
            + 'nobody wants to walk back.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And the photocopy wins, because it is the nearest.' }
  ]
});

PBE6.scene('u17-17-7-b', {
  set: 'archive',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'There are three different gate sheets in the building. The yard '
            + 'pad has a signature column and no date column. The Baghdad Street '
            + 'pad has both. And there is a box of about two hundred old ones in '
            + 'the store with neither.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And which are being used?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'All three. When the yard pad runs out, Abu Yasser takes a block '
            + 'from the old box, because it is there and it is free.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which version is right?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'The Baghdad Street one, and the people using the wrong one are the '
            + 'people who have been here longest, because they are used to a pad '
            + 'that lives in a drawer in the yard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what should the note say?' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'The old pads are withdrawn, the box in the store is to be '
            + 'destroyed, and the yard pad is reprinted with a date column from '
            + 'the 1st.' }
  ]
});
