/* Unit 10 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u10-10-1', {
  set: 'meeting',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your note says Ms Shamsi said she had already sent the September invoice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She did.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'When?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On the telephone. Tuesday.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And when did she say she had sent it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…She did not say. She said she had already sent it, and I assumed '
            + 'she meant before Tuesday.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which is what already does — it moves the sending to before the '
            + 'saying, and you do not actually know that. She may have meant '
            + 'already as in I have put it in the post this morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write she said she had sent it and leave already out.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Better. And put the date of the call in the note, because had sent '
            + 'only means anything if the reader knows when the saying happened. '
            + '⚠ A reported statement without the date of the reporting is a '
            + 'tense with nothing to measure from.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was Tuesday the 25th, at about ten.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then write that, and then write what you did about it, because the '
            + 'note will be read by somebody deciding whether to telephone her '
            + 'again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I checked the post book and there is nothing from her since the 11th.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then that is the note. On 25 November Ms Shamsi said she had '
            + 'sent the September invoice. The post book shows nothing from her '
            + 'since 11 November. Two sentences, one of them hers and one of them '
            + 'ours, and the reader can see which is which.' }
  ]
});

PBE5.scene('u10-10-1-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your note says Mr Jaber said he had just collected the Aleppo load.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He did.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'This morning, about nine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when did he say he had collected it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…He did not say. I took just to mean a few minutes before he telephoned.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is what just does, and he may have meant some time today. ⚠ '
            + 'Leave it out and put the time of the call in.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then my own finding, separately: the gate sheet shows no '
            + 'collection today at all.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then that is the note, and the two halves are visible.' }
  ]
});

PBE5.scene('u10-10-2', {
  set: 'meeting',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'What did Attar ask you on Thursday? In the order he asked them, if you can.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'First he asked whether the gate count was against the order or the '
            + 'picking list. Then he asked who signed the gate sheet. Then he '
            + 'asked whether the signature went on before or after the count. '
            + 'Then he asked what happened to a difference once it was recorded. '
            + 'And then he asked whether the invoice was raised from the order or '
            + 'the gate sheet.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say that again and listen to it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…He was walking towards the last one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'From the first question. Every one of the five is a step towards '
            + 'what happens to a difference, and the answer is that nothing does.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He never said that was what he was looking for.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'He never says. ⚠ The order of somebody\'s questions tells you what '
            + 'they already suspect, and it is the only part of an interview that '
            + 'nobody thinks to write down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There was a sixth. He asked how many differences had been recorded '
            + 'this year, and I did not know.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'What did you say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That I did not know and that I would count them and tell him. ⚠ '
            + 'And I wrote the question down in front of him, which I think was '
            + 'the right thing to do.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'It was, and for a reason that is not about politeness: the '
            + 'question you cannot answer is the one you will forget by Monday, '
            + 'and it is also the one he will come back to.' }
  ]
});

PBE5.scene('u10-10-2-pair', {
  set: 'meeting',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What did the new customer ask? In the order, if you can.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'First he asked how long we had traded. Then he asked whether we '
            + 'held stock. Then he asked what our lead time was. Then he asked '
            + 'whether we had ever missed a promised day. And then he asked what '
            + 'we had done about it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again and listen to it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The first four are all things he could have asked anybody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the fifth?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The fifth is the only one that tells him anything, because every '
            + 'supplier he asks will say yes to stock and give him a lead time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what was he buying?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Not a lead time. He was buying what happens when the lead time '
            + 'fails, and I answered the first four carefully and the fifth in '
            + 'about six words.' }
  ]
});

PBE5.scene('u10-10-3', {
  set: 'meeting',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Hala — Mr Attar has asked for a count of every recorded difference '
            + 'this year, by Monday. That came from him and not from me, and I '
            + 'have told him Monday is possible.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Every difference? That is going through the gate sheets.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Every one. Eleven months of sheets.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is two days.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is about a day and a half and I have taken the Thursday counter '
            + 'off you to pay for it, and I have told Mr Ayoub that is where '
            + 'Thursday went.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Did he ask for it by Monday or did you offer Monday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He asked how long it would take and I said Monday. ⚠ So the Monday '
            + 'is mine and the count is his, and you should know which part to '
            + 'argue with.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then I would argue with Monday and not with the count.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'If you want the number right, Monday is tight and I will be adding '
            + 'up tired. If you want a number by Monday I can give you one by '
            + 'Monday and tell you which months I rushed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then take Tuesday and I will tell him Tuesday, and I will tell him '
            + 'why. ⚠ He asked how long it would take; he did not say Monday, and '
            + 'I have been treating my own answer as his instruction for about an '
            + 'hour.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Most people would not have said that out loud.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Most people would not have been asked which part to argue with.' }
  ]
});

PBE5.scene('u10-10-3-pair', {
  set: 'meeting',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Mr Nassif has set a new price list from the 1st. That is his. And '
            + 'I have undertaken that every trade customer will be told '
            + 'personally before then.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many is that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Forty-one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did he ask for that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. He said the list starts on the 1st. The forty-one calls are mine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I would argue with the calls and not with the list. A letter '
            + 'to forty-one and a call to the six who buy weekly would take a '
            + 'morning instead of three days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is better and it was never his instruction, so I can simply change it.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Which you could not have done if you had passed it on as his.' }
  ]
});

PBE5.scene('u10-10-4', {
  set: 'meeting',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The minutes say I admitted the counter list was out of date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You said it was out of date.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I said it was dated the 5th and the band changed on the 8th. I '
            + 'said it in the first minute of the meeting, before anybody asked '
            + 'me anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And admitted makes it sound like—' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Like somebody got it out of me. Which is the opposite of what '
            + 'happened, and in six months that is the only record there will be.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should it say?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Said. Or if you want to be accurate, reported — because I brought '
            + 'it to the meeting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Reported is better than said. ⚠ And you are right about the six '
            + 'months, which is the part I had not thought about: I chose '
            + 'admitted because it felt like a stronger word for a serious point, '
            + 'and the strength went onto you instead of onto the point.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'There is another one. It says Nadia pointed out that the invoice '
            + 'was raised from the order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She did.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'She said it. ⚠ Pointed out means she was right and somebody else '
            + 'had been wrong, and the somebody else is me two lines earlier, and '
            + 'neither of us said anything of the kind.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the minute has given her a victory and you a confession, in two '
            + 'lines, out of one conversation in which nobody disagreed with '
            + 'anybody.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'And it is signed by you and nobody will ever read the other '
            + 'version, because there is no other version.' }
  ]
});

PBE5.scene('u10-10-4-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The minutes say I explained that the gate is unmanned after five.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You said it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I said it. Nobody had asked and nobody was confused. I said it in '
            + 'the same voice I would say that it is Tuesday.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And explained makes it sound like—' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Like the room had misunderstood something simple and I had to put '
            + 'them right. Which is a claim about everybody else in that meeting, '
            + 'not about me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I had not thought of it that way round.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Said. Or reported, because I brought it to the meeting and nobody '
            + 'asked me to.' }
  ]
});

PBE5.scene('u10-10-5', {
  set: 'meeting',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Your note says the bank said they would review it in April, which means no.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It does mean no.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It probably does. What did he say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That they would review the facility in April.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And nothing else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He said the committee had not met and that he would put it on the '
            + 'April list.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So he said three things and your note contains one of them and '
            + 'your own conclusion joined to it by which means. ⚠ The conclusion '
            + 'may be right and it is not a report, and in April, when somebody '
            + 'reads this, they will not be able to tell what he said from what '
            + 'you thought.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: he said the committee had not met, that he would put it on the '
            + 'April list, and that they would review it in April.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then a separate sentence. I understood that to mean the '
            + 'application has not been refused but will not be considered before '
            + 'April.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which is a better interpretation than no, and you only got to it '
            + 'by separating them. ⚠ The interpretation gets its own sentence, in '
            + 'your own name, and then it can be argued with — and it may be '
            + 'wrong, because the committee has not met is also what somebody '
            + 'says when a thing is going through.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I had decided it was a no before I wrote the note.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Everybody has. ⚠ The discipline is not to stop deciding; it is to '
            + 'keep the decision in a sentence of its own, so that the next '
            + 'person can disagree with the decision without having to doubt the '
            + 'report.' }
  ]
});

PBE5.scene('u10-10-5-pair', {
  set: 'meeting',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your note says she said to leave it with her, which means she is '
            + 'sending a replacement.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is what it means.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It may be. What did she say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To leave it with her.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And nothing else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She said she was away until Thursday. And that the warehouse was '
            + 'being counted this week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So she said three things and your note has one of them and your '
            + 'conclusion fixed to it. ⚠ Now read the three together.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nothing will happen before Friday, and she has not said she will send one.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is a different note, and a more useful one, and you got '
            + 'there by writing down the two things you had left out.' }
  ]
});

PBE5.scene('u10-10-6', {
  set: 'meeting',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Four actions. One has a name and a date on it. What about the other three?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They were agreed by everybody.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then they were agreed by nobody. Who is counting the differences?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'By when?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tuesday.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then write Hala and Tuesday. ⚠ An action without an owner is a '
            + 'wish and an action without a date is a wish with a plan.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And there is a page and a half of discussion.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Cut it. Who said what in a meeting matters when somebody has to be '
            + 'able to ask a question afterwards, and the question is always why '
            + 'did we decide that — so keep one line of reason against each '
            + 'decision and throw the rest away.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Even the disagreement? Nadia and Abu Yasser did not agree about '
            + 'the Friday printing.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That you keep, and you keep it with both names on it. A decision '
            + 'that was unanimous and a decision that was taken over an objection '
            + 'are different decisions, and in six months the second one needs to '
            + 'be visible — because if it goes wrong, the person who objected was '
            + 'right and should be asked next time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Most minutes I have seen record everything as agreed.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Most minutes are written to make the meeting look calm. ⚠ A minute '
            + 'that records an objection is a minute somebody can learn from, and '
            + 'the only cost is that it does not read as smoothly.' }
  ]
});

PBE5.scene('u10-10-6-pair', {
  set: 'meeting',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Four items and nothing was decided. What do the minutes say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They say we discussed the van, the store room, the Ghouta day and '
            + 'the price list.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a list of what was on the table. What happened to each?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. We ran out of time on three and nobody would decide the fourth.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it is four deferred entries, and each needs a date for the decision.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That looks like a bad meeting.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It was a bad meeting. A minute that says discussed four times '
            + 'looks like a good meeting and tells nobody anything — and in three '
            + 'weeks somebody will ask what we decided about the van and there '
            + 'will be no answer and no date either.' }
  ]
});

PBE5.scene('u10-10-7', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Fadi — Ghouta moves to Wednesday and Friday from Monday week. You '
            + 'were not in the meeting and it is your Friday, so I will tell you '
            + 'what was decided and who objected.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Somebody objected?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser. He said he cannot be at the gate and on the forklift '
            + 'on a Friday morning, because that is when the wrap comes. It is in '
            + 'the minutes with his name on it and it was not resolved — Mr Ayoub '
            + 'took the decision.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So on Friday the wrap arrives, he is on the forklift, and I am '
            + 'loading Ghouta.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is what the objection says.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There is something else. The Friday Ghouta run is the one with the '
            + 'two Harasta drops at the far end, because they are shut '
            + 'Wednesdays. So Friday is the long run and it is also the morning '
            + 'with no forklift.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody in that room knew that.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Nobody in that room drives it. ⚠ And I would not have known about '
            + 'the wrap, either, so between us the objection is twice as bad as '
            + 'he made it sound.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I will put both halves to Mr Ayoub this afternoon, and I will '
            + 'say it came from the two of you.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'He will say to do it anyway.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'He may. ⚠ But if he does, it will be on the record that two people '
            + 'said what would break and what it would cost, and in February '
            + 'nobody will be looking for somebody to blame — they will be '
            + 'looking at the minute.' }
  ]
});

PBE5.scene('u10-10-7-pair', {
  set: 'meeting',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'It was agreed on Monday that all complaints must be in writing. '
            + 'You were not there and you take them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did anybody object?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nadia did. She said a written requirement would slow a settlement. '
            + 'Not resolved; the chair decided.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There is a number nobody has. We settle about a dozen a year on '
            + 'the telephone, same day, and I have never written one of them up.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A dozen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So from Monday either a dozen settlements a year are irregular, or '
            + 'they stop happening and a dozen customers wait a week. ⚠ Nadia '
            + 'said it would slow things down. She did not know it would make '
            + 'last year\'s dozen look like a dozen breaches.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then that is the half she did not have, and I will put both to him.' }
  ]
});

PBE5.scene('u10-10-7-b', {
  set: 'meeting',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'phone', hold: 'phone' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ghouta moves to Wednesday and Friday from Monday week. You were '
            + 'not in the meeting and it is your Friday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser objected. He said he cannot be at the gate and on the '
            + 'forklift on a Friday morning, because that is when the wrap comes. '
            + 'It is in the minutes with his name on it, and it was not resolved '
            + '— Mr Ayoub took the decision.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There is something else. The Friday run is the one with the two '
            + 'Harasta drops at the far end, because they are shut on Wednesdays. '
            + 'So Friday is the long run and it is also the morning with no '
            + 'forklift.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Nobody in that room knew that. I will put both halves to Mr Ayoub '
            + 'this afternoon and say it came from the two of you.' }
  ]
});
