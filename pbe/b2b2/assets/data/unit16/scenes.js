/* Unit 16 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u16-16-1', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The case for Homs is that the market is better than it was and the '
            + 'rent is lower.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is the version you can answer, and you can answer it in two '
            + 'sentences. ⚠ It is not the version Bassel holds.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is what he said.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is what he said in four minutes standing up. ⚠ Your job is '
            + 'the case he would write if he had three days and the ledgers — and '
            + 'he has not had the ledgers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the strong version has to use my own figures.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It has to use the figures, and the figures are not yours. What '
            + 'do they say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That the 2021 closure was decided on a number that was never '
            + 'counted. Fixed cost was 1.9 million, turnover 11.8, and the whole '
            + 'of the shortfall is in the counter lines — which were restocked on '
            + 'booked orders because nobody measured the walk-in trade.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So what is the strongest case for reopening?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That the unit never failed as a shop. It failed as a warehouse '
            + 'with a door in it. ⚠ At sixty square metres on the Hama road, at '
            + '1.1 million, with the walk-in trade counted from the first week, '
            + 'the thing that killed it in 2021 cannot happen.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is better than anything Bassel has said and you do not '
            + 'believe a word of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I believe every word of it. I do not think it is enough. Those '
            + 'are different.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then write the first and keep the second for the second paper. ⚠ '
            + 'And the test: would Bassel read this and say yes, that is what I '
            + 'mean? If he would say that is better than what I meant, better '
            + 'still.' }
  ]
});

PBE8.scene('u16-16-1-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I cannot write the strong version. I do not believe it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which sentence do you disbelieve?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the unit never failed as a shop.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is it true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The figures say so. Booked orders flat, the whole fall in the counter lines.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you believe it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I believe it and I do not think it decides the question.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that, and notice what you have just done.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have separated believing it from thinking it enough.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And you can now write a case you believe every sentence of and still oppose.' }
  ]
});

PBE8.scene('u16-16-2', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your first line says your view is not in this paper. Then your '
            + 'view is in it three times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Where?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Merely nine point six in booked orders. Only about 1.1 million. '
            + 'And he projects nine million, which is a word you use about a '
            + 'forecast you do not accept.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Those are small words.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ They are the only words in the paper that have an attitude in '
            + 'them, so they are the words a reader will weigh. ⚠ You have '
            + 'written two thousand neutral words and three leaning ones, and the '
            + 'three are visible from across a room.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the ordering?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The three conditions. You have put the rent last. ⚠ It is the '
            + 'weakest of the three and the easiest to check, and last position '
            + 'in a list of three is where a writer puts the thing they expect to '
            + 'fail.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I put it last because it is the least interesting.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I believe you, and the reader cannot. ⚠ An ordering is a '
            + 'judgement and there is no way to write a list that does not '
            + 'contain one — so say what the ordering is. The three conditions in '
            + 'the order in which they can be established.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the disclaimer in line one?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Keep it, and say it once. ⚠ A disclaimer repeated is a thumb on '
            + 'the scale. A paper that says four times that it is not advocating '
            + 'anything is advocating something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So one line, and then nothing.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ One line, and then the discipline has to be in the words and not '
            + 'in the promise. ⚠ The first line tells the reader what you are '
            + 'trying to do. The three adjectives tell them whether you managed '
            + 'it — and they will believe the adjectives.' }
  ]
});

PBE8.scene('u16-16-2-pair', {
  set: 'boardroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The figures show merely nine point six in booked orders.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which word there has an attitude in it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Merely. It is a small word.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many other words in your paper have an attitude in them?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…None that I can see.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it is not a small word, it is your position.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Delete it, then. Nine point six in booked orders.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what were you using it to say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the figure was flat across both years.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is a fact and is stronger. Write that instead.' }
  ]
});

PBE8.scene('u16-16-3', {
  set: 'boardroom',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Paper B says you are against it. What would make you support it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would need to be convinced that the walk-in trade is there.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is not a condition, it is a mood. ⚠ Convinced by what, '
            + 'measured how, and over how long?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ A counted figure. Somebody standing in a doorway on the Hama '
            + 'road for four weeks, with a sheet, counting people who come in. ⚠ '
            + 'If it came to more than two hundred and twenty a week I would '
            + 'support it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Where does two hundred and twenty come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The 2020 counter turnover divided by the average counter sale, '
            + 'divided by fifty weeks, times the floor ratio. It is on the back '
            + 'of paper B.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then that is a real condition and it costs about nine thousand '
            + 'to test. ⚠ Now what is Bassel\'s?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I have not asked him.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Ask him. And the question is the other one: ⚠ what would make '
            + 'him abandon it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He said: if the counted figure came in under a hundred and fifty '
            + 'he would drop it and not raise it again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which is worth more than yours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because yours is a condition for changing your mind and his is a '
            + 'condition for giving up a thing he wants. ⚠ The second is the one '
            + 'a decider can rely on — and the two conditions together turn an '
            + 'argument into a measurement that costs nine thousand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And between a hundred and fifty and two hundred and twenty?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then neither of you has to move and I decide. ⚠ Which is my job, '
            + 'and it is the only part of this that cannot be measured.' }
  ]
});

PBE8.scene('u16-16-3-pair', {
  set: 'boardroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I would support it if I were convinced the trade is there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Convinced by what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By evidence that people come in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Measured how?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Somebody counting.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Over how long, and above what figure?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have not worked out a figure.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then you have no condition, and nothing anybody does can satisfy you.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is not what I intended.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is what you wrote, and the other side can read it the same way.' }
  ]
});

PBE8.scene('u16-16-4', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have written the case for reopening and I want to read it to '
            + 'you. Not to argue about it. To find out whether it is yours.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The unit never failed as a shop. It failed as a warehouse with a '
            + 'door in it, and the thing that killed it cannot happen in sixty '
            + 'square metres on the Hama road.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ That is better than what I said, and it is what I meant. ⚠ Where '
            + 'did the warehouse sentence come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The 2021 ledgers. Booked orders flat, counter lines down the whole '
            + '2.4 million.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ I have never seen those ledgers. ⚠ Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The counter lines were restocked on booked-order demand, because '
            + 'that is the only demand anybody counted.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Yes. ⚠ And there is one sentence in there I would not say.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ The one about the customer who came twice and found the line out '
            + 'and did not come a third time. ⚠ I think it is true and I would '
            + 'not put it in my own paper, because I cannot show it and somebody '
            + 'will ask me to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is marked as an inference.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then leave it in and I will say in the meeting that it is yours '
            + 'and not mine. ⚠ That is better than you taking it out, because it '
            + 'is the strongest sentence in the paper and it should not belong to '
            + 'nobody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And is anything missing?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ One thing, and it is the thing I actually care about. ⚠ Hala\'s '
            + 'sister runs the pharmacy two doors from the Hama road site and has '
            + 'done for nine years. ⚠ It is not in any ledger and it is why I '
            + 'picked that street rather than another one — and your paper has '
            + 'made a better case than mine for a reason that is not my reason.' }
  ]
});

PBE8.scene('u16-16-4-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Is it yours?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Yes, and better than mine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is there anything in it you would not say?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The sentence about the 2023 base. I cannot show it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Shall I take it out?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Leave it and put your name on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good. [pause] Then I think we are finished.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Is anything missing?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ One thing, and it is half my reason. The Wednesday driver is the '
            + 'one with the bad knee.' }
  ]
});

PBE8.scene('u16-16-5', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The covering note says: paper A puts the case for reopening; paper '
            + 'B, which I would ask you to read second, puts the case against.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Take out which I would ask you to read second.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is only an order of reading.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Second is the position that wins. ⚠ The last thing a reader '
            + 'reads is the thing they are holding when they decide — and you '
            + 'have asked for it, in writing, for your own paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then no order at all.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Name them in the order the question arises. For reopening first, '
            + 'because somebody proposed it. ⚠ That is an order with a reason '
            + 'that is not about you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What else gives it away?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The lengths. A is nine hundred words and B is sixteen hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because there is more to say against it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ There is more that you want to say against it, which is a '
            + 'different sentence. ⚠ A decider reading nine hundred for and '
            + 'sixteen hundred against has been told which one the writer '
            + 'believes, before reading a word of either.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I cut B to nine hundred.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Or write A up to sixteen, if there is sixteen hundred words of '
            + 'case. ⚠ Equal length is not fairness, it is the removal of one '
            + 'signal — and if a case genuinely cannot fill the space, say so in '
            + 'the covering note and let the asymmetry be deliberate.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the third thing?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The sentence offering to discuss. ⚠ I am happy to discuss paper '
            + 'B at any time. You have offered a conversation about one of the '
            + 'two papers. Offer both or neither.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Neither.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Neither, and then one line at the end that is the only honest '
            + 'thing a covering note can say: ⚠ the decision is yours and I have '
            + 'not made it in either paper.' }
  ]
});

PBE8.scene('u16-16-5-pair', {
  set: 'boardroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Paper B is longer because there is more to say against the proposal.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that what there is to say, or what you want to say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There genuinely is more. It prices three alternatives.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say so in the note.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why does saying it help?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because a reader counts pages before reading them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And an undeclared seven hundred words is read as emphasis.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where a declared seven hundred words is read as three priced alternatives.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the asymmetry is allowed if it is explained.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The asymmetry is information. Hiding it is the only fault.' }
  ]
});

PBE8.scene('u16-16-6', {
  set: 'boardroom',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Paper B is the better paper. It loses.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On what?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ On two things and neither is in paper B. ⚠ The pharmacy, which '
            + 'nobody can measure and which is why Bassel chose that street. And '
            + 'nine thousand, which is what your own attachment says it costs to '
            + 'find out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we take the count.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ We take the count, for four weeks from 5 January, and if it '
            + 'comes in above two hundred and twenty we reopen. ⚠ Your number, '
            + 'not his.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And between a hundred and fifty and two hundred and twenty?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then I decide again, and I will say now what I would probably '
            + 'do, which is take it — and you are entitled to have that in '
            + 'writing before the count rather than after.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why tell me that now?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because otherwise in February you will think the count decided '
            + 'it and it did not. ⚠ The count decides the easy half. I decide the '
            + 'band, and I have told you which way I lean, so that if you want to '
            + 'write anything more you write it in January and not in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I will not write anything more.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then write the one sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I will write that the decision went the other way on the '
            + 'pharmacy, which is a reason I did not weigh and could not have '
            + 'measured.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And not that you remain of the view that it is wrong?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ I do remain of that view and it is not worth a line, because '
            + 'nothing turns on it. ⚠ What turns on something is that a reason '
            + 'outside every document decided a question that four papers could '
            + 'not — and whoever reads this file in two years needs that sentence '
            + 'and does not need mine.' }
  ]
});

PBE8.scene('u16-16-6-pair', {
  set: 'boardroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What decided it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The driver\'s knee.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Was it in your paper?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It was in nobody\'s paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Could it have been measured?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what is the sentence a reader needs in two years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the decision was taken on a fact about one man\'s health that '
            + 'no document records.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And do you want to write that you remain of your view?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I do remain of it, and there is no trigger to attach to it, so it '
            + 'is a sentence about me.' }
  ]
});

PBE8.scene('u16-16-7', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The bank will want a paper on Homs before it will look at the four '
            + 'million again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Bassel should write it. It is his proposal.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Bassel believes it, which is the problem. ⚠ A lender reading a '
            + 'paper by somebody who wants a thing reads it for what has been '
            + 'left out — and Bassel has not read the ledgers, so he will leave '
            + 'out the 2021 figures and the committee will find them.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then Nour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I am against it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why you can write it. ⚠ You have already written the '
            + 'strongest case for it, you have marked what in it is yours, and '
            + 'there is no sentence you need to defend. ⚠ A paper by the person '
            + 'who opposed the decision cannot be read for what has been left '
            + 'out, because they had every reason to leave nothing in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is still advocacy. I would be asking them for money for '
            + 'something I think is a mistake.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is not advocacy, it is the company\'s case, and the company '
            + 'has decided. ⚠ Say what you need.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things. ⚠ One: the paper says the decision was taken on 16 '
            + 'December and names you as having taken it. Two: it says the count '
            + 'is being done and gives the thresholds, including mine. Three: it '
            + 'says in one line that the paper was written by the person who '
            + 'argued against it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The third one. Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because the committee will work it out from the conditions '
            + 'attachment if I do not say it, and then they will wonder what else '
            + 'I did not say. ⚠ And because it makes the rest of the paper worth '
            + 'more, not less.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is the only sentence in this conversation nobody could have '
            + 'written for you.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Granted, all three. ⚠ And when the count comes in, whichever way '
            + 'it goes, you write that paper too.' }
  ]
});

PBE8.scene('u16-16-7-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The bank will want a paper before it looks at the four million again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Bassel should write it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'He believes it, and he has not read the ledgers. He will leave out '
            + '2021 and they will find it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then Nour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am against the decision.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which is why your paper cannot be read for what you left out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the company\'s case, not mine.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say what you need.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The date and your name on the decision; both thresholds; and one '
            + 'line saying who wrote it.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Granted, all three.' }
  ]
});

PBE8.scene('u16-16-7-b', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The bank will want a paper on Homs before it will look at the four '
            + 'million again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Bassel should write it. It is his proposal.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Bassel believes it, which is the problem. ⚠ A lender reading a '
            + 'paper by somebody who wants a thing reads it for what has been '
            + 'left out — and he has not read the ledgers, so he will leave out '
            + 'the 2021 figures and the committee will find them.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then Nour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am against it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is why you can write it. A paper by the person who opposed '
            + 'the decision cannot be read for what has been left out, because '
            + 'they had every reason to leave nothing in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is still advocacy. I would be asking them for money for '
            + 'something I think is a mistake.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is not advocacy, it is the company\'s case, and the company '
            + 'has decided. Say what you need.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three things. That the paper names the decision\'s date and you '
            + 'as having taken it. That it gives the count and both thresholds, '
            + 'including mine. And that it says in one line that it was written '
            + 'by the person who argued against it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The third one. Why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because they will work it out from the conditions attachment, '
            + 'and then they will wonder what else I did not say. ⚠ And because '
            + 'it makes the rest of the paper worth more, not less.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Granted, all three. And when the count comes in, whichever way '
            + 'it goes, you write that paper too.' }
  ]
});
