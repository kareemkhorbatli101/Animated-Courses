/* Unit 3 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u3-3-1', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The Adra consignment. Mr Ayoub wants to know how we came to sign '
            + 'for a pallet that was short.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'We counted it and it was twenty-two, and the note said '
            + 'twenty-four, and I signed the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You signed a note that said twenty-four when you had counted twenty-two?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I wrote twenty-two on it first. I always do. The driver signed '
            + 'under my figure.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is a different story from the one I was told, and the '
            + 'difference is one word. Say it again with had.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I had written twenty-two on the note before he signed it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And that is the sentence. It had already been corrected when it '
            + 'left the yard, which means the twenty-four is not ours.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'There is something else. The pallet had already been opened when '
            + 'it came off the lorry. The wrap was cut along one side and taped '
            + 'again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You saw that before you counted?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Before I touched it. I have never seen that before in thirty '
            + 'years, and I did not know what to write, so I wrote nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So by the time you counted, somebody else had already been into '
            + 'it, and the one thing we cannot prove is what was in it before '
            + 'they did.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is why I wrote nothing. I did not want to write something I '
            + 'could not stand behind.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You were right about the standing behind and wrong about the '
            + 'writing. The wrap was cut along one side and re-taped is a thing '
            + 'you saw. Write what you saw and let somebody else decide what it '
            + 'means — that is the whole of it.' }
  ]
});

PBE5.scene('u3-3-1-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We took the order and then he changed it, and the warehouse picked '
            + 'the old one, and I amended the paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You amended the paper when the warehouse had already picked?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No — I amended it before they picked. The list had gone down at four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is a different story, and the difference is one word. '
            + 'Say it again with had.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The picking list had already been printed when I amended the order.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And that is the sentence. The amendment was never on the list they '
            + 'worked from, which means nobody in the warehouse ignored anything.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There is something else. The amendment had not been dated.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You wrote it and did not date it?' }
  ]
});

PBE5.scene('u3-3-2', {
  set: 'archive',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have three versions of the same sentence and I do not know which '
            + 'to send. Hala had not checked the credit list. Nobody had checked '
            + 'the credit list. The credit list had not been checked.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'All three are true?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'All three are true. It is her job, she did not do it, and it did '
            + 'not get done.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then the question is not which is true. It is what the sentence is '
            + 'for. Who is reading it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You. And then possibly the file.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'If it is for me and the thing is going to happen again next week, '
            + 'use the name. I cannot fix a Thursday without knowing whose '
            + 'Thursday it was. If it is for the file, where it will be read in a '
            + 'year by somebody who does not know her, use the passive.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And nobody had checked it?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Is the honest one when it is genuinely nobody\'s — and the '
            + 'dishonest one when it is somebody\'s and you would rather not say. '
            + 'That is the version people reach for, and it is the only one of '
            + 'the three that can be a lie while every word in it is true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the test is whether anybody could have been expected to.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The test is whether you could name a person and are choosing not '
            + 'to. If you can and you are, say so out loud to yourself and then '
            + 'decide. Half the time you will find you are protecting somebody '
            + 'who does not need protecting and would rather be named than be '
            + 'nobody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She would, actually. She told me on the Friday before I asked.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then she has already done the hard part and you are about to take '
            + 'the credit for it away from her by writing nobody.' }
  ]
});

PBE5.scene('u3-3-2-pair', {
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
      en: 'Three versions. I had not filed the guarantee. Nobody had filed '
            + 'the guarantee. The guarantee had not been filed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All three true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All three. Filing them is not written down as anybody\'s job and I '
            + 'have always done it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the question is what the sentence is for. Who is reading it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Ayoub, and then the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For him, the first — with the reason, which is that it is not '
            + 'anybody\'s job and you have been doing it for nothing. For the '
            + 'file, the third, with a line saying whose job it is now.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And nobody had filed it?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Can you name a person and are you choosing not to? You can name '
            + 'yourself, which is the hardest version of that question and the '
            + 'only one that matters here.' }
  ]
});

PBE5.scene('u3-3-3', {
  set: 'archive',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'How did the bank go?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By the time I got there, they had closed the counter, moved the '
            + 'queue to the first floor and taken the lease copy off the file.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'All three?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'All three, and the appointment was at ten and I was there at five to.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is a good sentence, actually. Say it to Mr Ayoub exactly like that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why that one?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Because by the time puts your five to ten and their three changes '
            + 'in the same sentence, and the reader does the arithmetic himself. '
            + 'If you tell him in order — the counter was closed, then I went '
            + 'upstairs, then they could not find the lease — he hears a morning '
            + 'of difficulties. The way you said it, he hears that you were early '
            + 'and it made no difference.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It did make a difference. I got it done by eleven.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then that is your second sentence and it belongs after the first. '
            + 'One sentence for what you walked into, one for what you did about '
            + 'it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the lease?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Had been taken off the file by somebody, at some point, for some '
            + 'reason nobody could discover. Which is exactly how to say it, '
            + 'because that is all anybody knows.' }
  ]
});

PBE5.scene('u3-3-3-pair', {
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
      en: 'How did the depot go?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'First the pallet was not there, and then they said it had gone on '
            + 'another lorry, and then the manager was at lunch.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again starting with by the time.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By the time I got there, they had loaded our pallet onto the Homs '
            + 'lorry, signed the paperwork for it and sent the manager to lunch.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what time were you there?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ten minutes early. Half past eight for a quarter to nine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that too. And what did you do about it?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'I got the Homs driver stopped at the weighbridge and took it off '
            + 'there, which cost an hour and not a day.' }
  ]
});

PBE5.scene('u3-3-4', {
  set: 'archive',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'So he ordered at the old price, and then we put the price up, and '
            + 'he is annoyed because we charged him the new one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Can I check one thing in that? The order came in on the 14th.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The 14th, yes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the price went up on the 11th.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…The 11th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So it is the other way round. By the time he ordered, the price '
            + 'had already gone up — three days earlier.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then why is he annoyed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because nobody told him. He had been given a quotation on the 2nd, '
            + 'and the quotation says fourteen days, so on the 14th he believed '
            + 'he was inside it, and he was — by two days.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So he is right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He is right and we are right, which is the worst kind of argument. '
            + 'He had a quotation that had not expired; we had a price that had '
            + 'already changed. Both sentences are true and the order of events '
            + 'is what tells us which one wins.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Which one does win?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'His. A quotation in writing with a date on it beats a price list '
            + 'every time, and it is our own rule, and we wrote it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I would have gone to him with the price list.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You would have gone to him with the wrong order of events, and he '
            + 'had the right one on a piece of paper with our stamp on it.' }
  ]
});

PBE5.scene('u3-3-4-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So he went over his limit, and we let the order through, and now '
            + 'accounts are asking why.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Can I check one thing in that? The order was on the 12th?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The 12th, yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the limit was raised on the 8th.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The 8th. But the list at the counter is dated the 5th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is the other way round. By the time he ordered, the limit '
            + 'had already been raised — four days earlier — and the counter was '
            + 'working from a list that had been superseded.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then nobody went over anything.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody went over anything, and the rule that settles it is the '
            + 'date on the counter copy, which is our own rule and we wrote it.' }
  ]
});

PBE5.scene('u3-3-5', {
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
      en: 'The chronology for the Haffar order. Second of October, quotation. '
            + 'Eleventh, price rise. Fourteenth, order. Sixteenth, invoice.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Good. Now put beside each one where the date comes from.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second is on the quotation. The fourteenth is on the order. '
            + 'The sixteenth is on the invoice.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the eleventh?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The eleventh is when the price went up.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Says who, on what paper?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The list in the counter drawer is dated the eleventh. But the '
            + 'list in your office is dated the eighth.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then we have two prices and two dates and no way of knowing which '
            + 'was in use at the counter on the fourteenth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I leave the line out?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Never leave a line out. Write it and write unrecorded beside it. A '
            + 'chronology with a hole in it that says hole is worth ten times one '
            + 'that is smooth and partly invented.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It makes us look disorganised.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'We were disorganised — there are two undated lists in one '
            + 'building. The gap is not a weakness in the chronology, it is the '
            + 'finding. Everything else on that page we knew already; the line '
            + 'that says unrecorded is the only one that will change anything on '
            + 'Monday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if somebody asks why there are two lists?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Then the chronology has done its work before anybody has even '
            + 'argued about the 46,000.' }
  ]
});

PBE5.scene('u3-3-5-pair', {
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
      en: 'The chronology for the machine. The engineer was called on the '
            + '4th, he came on the 6th, and the fault came back on the 9th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. Now put beside each one where the date comes from.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The 4th is in the diary. The 6th is on his docket.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the 9th?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nobody wrote it. I know because the night man told me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then we have a date from one person\'s memory and nothing else. '
            + 'And the two restarts on the night shift?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Also nothing. Also the night man.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So two of your four lines rest on one man\'s recollection. Write '
            + 'them both and mark them unrecorded. ⚠ And do not write the night '
            + 'man says as though that were a weakness in him — it is a weakness '
            + 'in us, because we have never given him anywhere to write it.' }
  ]
});

PBE5.scene('u3-3-6', {
  set: 'archive',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The credit note. I did it wrong and I do not know how.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tell me what you did, in order.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I wrote the amount, I wrote the invoice number, I signed it, and I '
            + 'posted it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second copy?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '…There is a second copy?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is a second copy and it stays in the book. Had you ever '
            + 'raised one before?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'No. It was the first time I had done it. Nadia always does them '
            + 'and she was at the bank.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is the whole of it, and the sentence is it was the first '
            + 'time I had raised one. Say it like that to Mr Ayoub if he asks.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It sounds like an excuse.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is not an excuse and it is not nothing. It explains why the '
            + 'second copy is missing and it does not excuse the two hours I '
            + 'spent looking for it. Those are different things and you are '
            + 'allowed to say the first without claiming the second.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'What should I have done?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Asked. And I am not going to pretend that is a satisfactory '
            + 'answer, because Nadia was at the bank and I was at Baghdad Street '
            + 'and you had a customer waiting. Asked whom?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is why I did not ask.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Which is a better finding than anything about the credit note. '
            + 'There is no written procedure for a credit note and the only '
            + 'person who knows is one person. I am going to write it on one side '
            + 'of paper this afternoon, and you are going to tell me where it is '
            + 'wrong, because you are the one who has just found out what it does '
            + 'not say.' }
  ]
});

PBE5.scene('u3-3-6-pair', {
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
      en: 'The customs form. I did it wrong and I do not know how.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tell me what you did, in order.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I took the value off the invoice, I wrote it in the box, I signed '
            + 'it, and I gave it to the broker.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the declared value?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That is a different figure?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Had you ever filled one in before?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It was the first time I had done it. Bassel does them and he '
            + 'was in Homs.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the sentence is it was the first time I had filled one in. It '
            + 'explains the figure and it does not excuse not telephoning him, '
            + 'which you could have done in a minute.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There is a note on how to do it, apparently. In a drawer.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then asked whom has an answer and where is it written does not, '
            + 'and the second one is the finding.' }
  ]
});

PBE5.scene('u3-3-7', {
  set: 'archive',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The order was changed after the picking list was printed. Hala '
            + 'says it was before.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It was before. I amended the list by hand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am not going to decide which of you remembers better, because '
            + 'you both remember perfectly and you are talking about two '
            + 'different pieces of paper. Where is each date recorded?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The amendment is on the order, in Hala\'s hand, undated.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Undated. And the picking list?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The picking list is time-stamped. Four o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So we can date the list to the minute and we cannot date the '
            + 'amendment at all. Bassel, what makes you say it came after?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The warehouse picked twelve. If the amendment had been there, they '
            + 'would have picked fourteen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is an inference and it is a good one, and it is not a date. '
            + 'Hala, what makes you say before?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'I remember doing it while the printer was still running.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Also an inference, also good, also not a date. So the honest '
            + 'chronology says: list time-stamped at four; amendment undated; '
            + 'warehouse picked twelve. And then one line saying that the '
            + 'amendment is undated and therefore the order of these two events '
            + 'cannot be established.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That settles nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It settles everything that can be settled, which is not the same '
            + 'as nothing. And it finds the thing worth finding: we have a '
            + 'document people write on by hand and never date. The next one of '
            + 'these will be settled in ten seconds, and this one never will be.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So we initial and date amendments.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'From this afternoon. And you two have just spent four minutes '
            + 'disagreeing about a Thursday, and the finding was not on either '
            + 'side.' }
  ]
});

PBE5.scene('u3-3-7-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    c: { rig: 'm-30s-a', name: 'C', voice: 'en-US-GuyNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'He was telephoned about the price. I am sure of it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He was not. He told me himself that nobody rang him.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'Where would a call out be recorded?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It would not. We do not keep a note of calls out.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'Then neither of you can be shown to be right, and I am not going '
            + 'to ask either of you to remember harder. What makes you say he was '
            + 'telephoned?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because I remember deciding to do it.' },
    { who: 'c', cam: { shot: 'mid' },
      en: 'That is an inference about yourself and it is the commonest kind '
            + 'there is — deciding to do a thing and remembering it as done. It '
            + 'is not a date.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So we write that it cannot be established.' },
    { who: 'c', cam: { shot: 'close' },
      en: 'We write that, and we start a pad by the telephone this afternoon. '
            + '⚠ And neither of you was wrong about anything, which is worth '
            + 'saying to each other.' }
  ]
});

PBE5.scene('u3-3-7-b', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The chronology for order 0914, built on the twenty-second of '
            + 'October from the documents named. Nothing in it is from memory.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Second of October: the quotation was issued, fourteen days, '
            + 'stamped — that is in the quotation book. Eighth and eleventh of '
            + 'October: there are two price lists, one in the office file dated '
            + 'the eighth and one in the counter drawer dated the eleventh. Both '
            + 'are marked disputed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleventh to thirteenth: the customer was not told of any rise. '
            + 'There is no letter and no note of a telephone call, so that line '
            + 'is marked unrecorded.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fourteenth of October: the order was placed by telephone and taken '
            + 'by Hala; the counter copy is initialled. Sixteenth: the invoice '
            + 'was raised at list price.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'What has changed, from the twenty-second: one price list, printed '
            + 'on Fridays, initialled and dated by whoever prints it, and the old '
            + 'copy destroyed.' }
  ]
});
