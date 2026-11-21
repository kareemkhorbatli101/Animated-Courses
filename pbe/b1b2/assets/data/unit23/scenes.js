/* Unit 23 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u23-23-1', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The Hama mill has closed. We should buy six months of board this week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Read me the sentence again. The sentence, not what it means.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is understood that the mill at Hama has suspended deliveries, '
            + 'with a resumption expected in about three weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then it has not closed. ⚠ Suspended deliveries is not closed, '
            + 'and in about three weeks is in the same sentence as the '
            + 'suspension.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Suspended, closed — the board does not arrive either way.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is the difference between three weeks and never, and we are '
            + 'deciding whether to spend forty million. ⚠ What else does the '
            + 'sentence not tell us?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…Who says so.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is understood that — which is a sentence with no source in it '
            + 'at all. ⚠ And it does not say whether it is all deliveries or the '
            + 'export grade, which is the only grade we buy.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So three things.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three. What has happened, who says so, and to what. And the '
            + 'report gives us a verb, an it is understood, and no product.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then what do we do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Telephone Hama. ⚠ It takes four minutes and it is the only '
            + 'action in this room that produces a fact. ⚠ And whatever they say, '
            + 'write it down with the date and who said it — because in September '
            + 'somebody will ask what we knew in July.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if they do not answer?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then we know one more thing than we know now, and we write that '
            + 'down too: telephoned 21 July, no answer, twice.' }
  ]
});

PBE6.scene('u23-23-1-pair', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The border is closed. We should hold the consignment.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Read me the sentence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is reported that the crossing is closed to commercial traffic.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Which crossing? There are three we use.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…It does not say.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And commercial traffic — is a lorry of ours commercial traffic '
            + 'when it is empty?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then there are two calls, and the consignment is not held until '
            + 'we have made them.' }
  ]
});

PBE6.scene('u23-23-2', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have written the sales office claimed the suspension is on the '
            + 'heavy brown only.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then you have told the reader you do not believe him, and you '
            + 'have not said so, and you cannot be held to it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I do believe him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then write said. ⚠ Said takes no position at all — it reports '
            + 'and nothing else, and it is the right verb nine times in ten.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And claimed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Claimed means: he says this and I am not vouching for it. It is '
            + 'useful and it is not neutral, ⚠ and the moment you use it you have '
            + 'made the reader doubt — so use it only where you have a reason '
            + 'and, better, give the reason.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Admitted?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Admitted says two things: that it is against his interest, and '
            + 'that somebody had to get it out of him. ⚠ If he volunteered it, '
            + 'admitted is simply wrong — and he volunteered the fortnight.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if he had refused to say anything?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Declined to comment, which is a fact, not would not say, which '
            + 'is a verdict. ⚠ And denied only where there was an accusation to '
            + 'deny — he denied the mill had closed is wrong if nobody asked him '
            + 'whether it had.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Nobody will notice the difference.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Mr Attar will notice, in September, and he will be deciding '
            + 'whether to spend money on the strength of your sentence. ⚠ And if '
            + 'the sentence says claimed, he will telephone Hama himself — ⚠ '
            + 'which costs us nothing except that it says we did not believe our '
            + 'own source, in writing, in a file.' }
  ]
});

PBE6.scene('u23-23-2-pair', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have written he admitted that it was only a fortnight.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Did he volunteer it or was it got out of him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He volunteered it. I had not asked.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then admitted is wrong twice over, because it also says a '
            + 'fortnight is against his interest.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is it not? He wants us to think it is short.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then a fortnight is in his interest, which makes admitted the '
            + 'opposite of what happened.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So said.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ He said about a fortnight, without being asked — and the without '
            + 'being asked is the evidence.' }
  ]
});

PBE6.scene('u23-23-3', {
  set: 'pressdesk',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your note has it is understood that the suspension is on two '
            + 'grades. Understood by whom?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By me. The sales office told me on the telephone.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then write that. The Hama sales office told me on 21 July that… '
            + '⚠ Eleven words, and a reader in September knows exactly what he '
            + 'has.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The trade sheet writes it is understood.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ A trade sheet has three reasons for writing it and only one of '
            + 'them is honest. ⚠ The first is that it is protecting a source who '
            + 'would be sacked — and that is a real reason and a good one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That it has one source and does not know whether he is right. ⚠ '
            + 'Which is also honest if the reader knows that is what it means — '
            + 'and no reader does, because the phrase reads like a consensus and '
            + 'means a man on a telephone.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That somebody heard it in a yard and would rather not say so. ⚠ '
            + 'And you cannot tell which of the three you are reading, which is '
            + 'why the phrase is worth nothing in a decision.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I should never use it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Use it for the first reason only, and say that is what you are '
            + 'doing. ⚠ A man who would be dismissed for telling me this says… '
            + 'Twelve words, and the reader knows the source is real and '
            + 'protected and can weigh the whole thing properly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And in our own file notes?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Never. ⚠ In an internal note the phrase has no possible honest '
            + 'use, because the one reason for it — protecting a source — ⚠ is '
            + 'exactly the thing the file exists to record. A name in a file is '
            + 'not a name in a newspaper.' }
  ]
});

PBE6.scene('u23-23-3-pair', {
  set: 'pressdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your note says we have been told the order is cancelled. ⚠ By '
            + 'whom, and when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ms Shamsi\'s clerk. On the 9th, on the telephone.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then write that. How many words did it cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Eight.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And what did the old version cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Five.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Three words, and a reader in October knows whose clerk and which day.' }
  ]
});

PBE6.scene('u23-23-4', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Three sentences, in this order, every time. ⚠ What. Who says so. '
            + 'And what is not known.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Mine has the first two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then your reader will think everything else is known, and he '
            + 'will not telephone anybody, ⚠ and in a fortnight he will be '
            + 'surprised by something that was never in the note at all.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What is not known about the Hama suspension?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Whether the fortnight is from the 21st or from the start of the '
            + 'suspension; whether the slitter rebuild has a date; and whether '
            + 'the heavy brown shortage will pull our grade forward. Three '
            + 'things, and the third is the one that would cost us.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'That is longer than the other two sentences together.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It usually is, and that is the shape of honest information. ⚠ '
            + 'One line of fact, one line of source, and a paragraph of what we '
            + 'do not know.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'May I ask something about the third sentence? ⚠ It is the only '
            + 'part that tells anybody to do anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ The first two sentences close the subject and the third opens '
            + 'it. What is not known is a list of telephone calls, and nobody can '
            + 'read it without wanting to make one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is why it goes last and not first. ⚠ Put it first and it '
            + 'reads as a note from somebody who knows nothing; put it last and '
            + 'it reads as a list of work.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And when the calls are made?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Then the note is written again, with the same three sentences '
            + 'and a shorter third one. ⚠ A market note is dated because it is a '
            + 'photograph of what was known on a day — and the next one is a '
            + 'different photograph.' }
  ]
});

PBE6.scene('u23-23-4-pair', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have two sentences. Here is the third I would write — now '
            + 'count the words.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty-two, twenty-seven and fifty-six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So the third is longer than the other two together.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It looks as though I know nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ It looks as though you know where the edges are, which is '
            + 'different. ⚠ How many telephone calls is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Four.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then it is not a confession, it is Monday morning.' }
  ]
});

PBE6.scene('u23-23-5', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Read me your first paragraph.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The plater has given notice of twelve per cent from 1 March, the '
            + 'Hama suspension is on two grades, and a Homs works may reopen in '
            + 'the autumn.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Three things in one sentence and three different grades of '
            + 'certainty. ⚠ The first is a document, the second is a man on a '
            + 'telephone, and the third is a yard story — ⚠ and in that sentence '
            + 'they are all the same weight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are all things I have been told.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And the reader will act on all three equally, which is the whole '
            + 'danger. ⚠ Three headings, and nothing moves between them without a '
            + 'reason.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What makes something confirmed?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ A document I could put in front of somebody, or two independent '
            + 'people who have not read each other. ⚠ The plater\'s circular is '
            + 'confirmed. Hama is claimed — one man, no name, and he was helpful.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the Homs works?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Not known, and we have evidence against it: we drove past on 2 '
            + 'July and it has no roof. ⚠ Which goes under not known and not '
            + 'under denied, because nobody has denied anything — a roof is not a '
            + 'denial.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And when the Hama man is proved right?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it moves to confirmed and the note says when and why it '
            + 'moved. ⚠ A grade that changes without a reason written beside it '
            + 'is how a yard story becomes a fact in about six weeks — ⚠ and '
            + 'nobody can ever work out where it came from, because the sentence '
            + 'that promoted it was never written.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three headings every time, even for four lines?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Especially for four lines. ⚠ A long report sorts itself out '
            + 'because the reader has time to be careful; four lines are read in '
            + 'six seconds — and the headings are the only thing that survives '
            + 'six seconds.' }
  ]
});

PBE6.scene('u23-23-5-pair', {
  set: 'pressdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You have moved the Homs reopening from not known to claimed. ⚠ '
            + 'When did it move, and what moved it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two more people mentioned it this month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Where did they hear it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…One of them from the polythene man. The other I did not ask.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then nothing has moved except the number of people saying it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is something.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It is the one thing it is not. ⚠ A story repeated is still one '
            + 'story, and the repetition is what makes it feel confirmed.' }
  ]
});

PBE6.scene('u23-23-6', {
  set: 'pressdesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'If you are going to write one of these every month, it has to be one page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The graded table is most of a page already.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then the table is the note. ⚠ A note that runs to two pages will '
            + 'be read once, in the first month, and never again — and the value '
            + 'of a market note is entirely in its being read twelve times.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what goes at the top?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ The date and the one line that has changed since the last one. ⚠ '
            + 'Since 26 June: the Hama suspension, and the twelve per cent now in '
            + 'an invoice. Two clauses, and a reader who has read last month\'s '
            + 'note is up to date in four seconds.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And my own view? I have one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ At the bottom, under its own heading, with your name against it. '
            + '⚠ Never mixed into the graded table — the table is what is known '
            + 'and the bottom is what you think, and the reader must be able to '
            + 'see the join.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does my view belong in it at all?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is the most useful paragraph in the note and it must be the '
            + 'shortest. ⚠ Four lines: what you would do, what you would not do, '
            + 'and the one thing that would change your mind.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The one thing that would change my mind.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Yes, and it is the line that makes the rest of it worth reading. '
            + '⚠ Anybody can give an opinion; almost nobody will say in advance '
            + 'what would overturn it — and when it happens you have a note that '
            + 'tells you to change, in your own handwriting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if nothing has changed in a month?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then write the note and say so: nothing has changed since the '
            + '26th; the two calls on the heavy brown have not been returned. ⚠ A '
            + 'month with no note in it is read as a month when nothing happened '
            + '— and this is a trade where that is never true.' }
  ]
});

PBE6.scene('u23-23-6-pair', {
  set: 'pressdesk',
  arr: 2,
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
      en: 'The one thing that would change my mind is if things get worse.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Worse how? Who would see it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The market. Everybody would see it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then nobody will. ⚠ Give me a figure and a place.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Any quotation for our grade more than five per cent above the June list.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And where does a quotation arrive?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'At the gate, with the drivers. ⚠ Fadi sees all of them.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then tell Fadi, and write the date you told him.' }
  ]
});

PBE6.scene('u23-23-7', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I ask about the June note? ⚠ It had five things under not '
            + 'known, and four of them are known now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ And none of the four is written anywhere. I only know them '
            + 'because I asked you and you remembered three, and Fadi remembered '
            + 'the fourth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They went into the decisions. We acted on them.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ You acted on them and then the knowledge went back into your '
            + 'head. ⚠ The June note still says not known about four things that '
            + 'were settled in July — and anybody reading the file would make the '
            + 'same four telephone calls again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody reads the June note now. They read the July one.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Then the July one should carry the four answers, and it does not '
            + 'either, because when you wrote it you knew them and they did not '
            + 'feel like news.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is exactly what happened.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ And that is the whole fault. ⚠ The third part of the note is the '
            + 'only part that makes anybody do anything — it is a list of '
            + 'telephone calls — and it is the only part whose results are never '
            + 'written back. ⚠ The confirmed items get written down because they '
            + 'were surprises; the answered unknowns do not, because by then they '
            + 'are obvious.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what is the repair?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ One line in each note: answered since the last note, with its '
            + 'date and who said it. ⚠ Four lines in July, and the four telephone '
            + 'calls are never made twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where does it go?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Directly under the top line, before the table — because a reader '
            + 'who has four seconds should see the new facts and not the old '
            + 'grades. ⚠ And in a year it is the only part of the file anybody '
            + 'will read at all, because it is the only part that says what we '
            + 'found out rather than what we were told.' }
  ]
});

PBE6.scene('u23-23-7-pair', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Which actions in these minutes were completed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three of five. The tyres, the alarm contract and the gate light.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And where is the result of each written?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The invoice for the tyres is in the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And the alarm contract, and the light?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…In my head. The alarm man said our contract covers the yard; the '
            + 'light needs a new fitting, not a bulb.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then next year somebody will telephone the alarm man again and '
            + 'buy another bulb.' }
  ]
});

PBE6.scene('u23-23-7-b', {
  set: 'pressdesk',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'The June note had five things under not known, and four of them '
            + 'are known now. And none of the four is written anywhere.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They went into the decisions. We acted on them.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'You acted on them and the knowledge went back into your head. '
            + 'Three of the four are in yours and one is in Fadi\'s. The June '
            + 'note still says not known about four things that were settled in '
            + 'July.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody reads the June note now.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then the July one should carry the four answers, and it does not, '
            + 'because when you wrote it you knew them and they did not feel like '
            + 'news.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is exactly what happened.' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'The third part of the note is the only part that makes anybody do '
            + 'anything, and it is the only part whose results are never written '
            + 'back. The repair is one line: answered since the last note, with '
            + 'its date and who said it, under the top line.' }
  ]
});
