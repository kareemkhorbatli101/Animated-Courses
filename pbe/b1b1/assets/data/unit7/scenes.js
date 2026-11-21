/* Unit 7 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u7-7-1', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The delivery was late because Fadi did not leave until half past ten.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'True for the three of us in this room. Who else reads it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Attar. And the customer gets a version.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then you have written one sentence for three readers and it fits '
            + 'one of them. For us, because Fadi did not leave until half past '
            + 'ten — a person and a time, and we can act on it. For the file?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Owing to a late departure from the yard.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Good. No name, and still checkable, because the gate sheet has the '
            + 'time on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And for Mr Haffar?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'What does he need? Not the reason in that detail. He needs to know '
            + 'whether it will happen again on Thursday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Your delivery arrived at four rather than one as a result of a '
            + 'late departure from our yard. Thursday\'s is loaded the night '
            + 'before.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is the one. ⚠ And notice what you did not do, which is leave '
            + 'the cause out. People think the customer version means the vague '
            + 'version and it does not — it means the short version, with the '
            + 'thing he can use kept in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Most of the letters I have received in my life left the cause out.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Most of them were written by somebody protecting themselves, and '
            + 'you could tell. ⚠ We apologise for the inconvenience caused has no '
            + 'cause in it at all, which is why it reads as an insult rather than '
            + 'an apology.' }
  ]
});

PBE5.scene('u7-7-1-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The invoice was 46,000 high because Hala priced it from the list of the 5th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'True for us. Who else reads it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Attar, and Mr Haffar gets a version.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then give me the file version — no name, still checkable.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Owing to a superseded price list in use at the counter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the customer\'s. What does he actually need?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Your invoice was 46,000 high as a result of an out-of-date price '
            + 'list at our counter. One dated list is now printed on Fridays and '
            + 'the old copy is destroyed.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And notice what you did not do, which is leave the cause out.' }
  ]
});

PBE5.scene('u7-7-2', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The picking list is printed at 7.15, after the counter opens.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It always has been.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which meant that on Tuesday the Ghouta run left three and a half '
            + 'hours late, four drops were outside the window, and Mr Haffar '
            + 'refused his and sent it back.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say that again from the beginning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The list is printed after the counter opens, so the same person is '
            + 'doing both, so the picking does not start until about 9.40.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the returned consignment?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Came back on the lorry, went to the yard overnight, and nine '
            + 'cartons of it are now damp. About 180,000, and it is a write-off.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then why is this the first I have heard of the printing time?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is not. It was in the report in March and the report in June.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And in those reports, what did it say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The picking list is printed at 7.15.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'That is a fact about a printer, and I read about forty facts a '
            + 'week. ⚠ Which meant that nine cartons were written off is a '
            + 'decision I can make in one minute, and I would have made it in '
            + 'March. A cause with no consequence attached gets filed, and '
            + 'whoever filed it was me.' }
  ]
});

PBE5.scene('u7-7-2-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The counter telephone is not answered between twelve and one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It never has been.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which meant that in October eleven calls were not returned, four '
            + 'of those customers have since ordered from Maarouf, and one of '
            + 'them had ordered from us every week since 2019.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again from the beginning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Both staff take lunch together, so the telephone rings out, so the '
            + 'call is lost, so the customer telephones the next yard along.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what did it cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 900,000 of trade in one month, and we did not add it up until Tuesday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then why is this the first I have heard of it?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'It is not. It was in the report in June. It said "the counter '
            + 'telephone is not answered between twelve and one."' }
  ]
});

PBE5.scene('u7-7-3', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your report says the delay was serious.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Serious tells me how you feel about it. What crossed a line?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The run left at half past ten.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was so late that Mr Haffar\'s shop had shut by the time we got '
            + 'there, so the load came back, so it stood in the yard overnight, '
            + 'so nine cartons were damp.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is four lines and every one of them is a line that was '
            + 'crossed. Write that instead of serious.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is longer.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'It is four times as long and about forty times as useful, and here '
            + 'is the test. ⚠ A so … that sentence is right when the second half '
            + 'names something that would not have happened at all if the first '
            + 'half had been smaller. If the shop had still been open, nothing on '
            + 'that list happens. Half an hour earlier and there is no incident.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if nothing had been crossed? If it was just late?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Then it was late, and you say the run left three and a half hours '
            + 'late and stop. ⚠ Do not reach for so … that when nothing changed — '
            + 'that is how a report acquires drama, and a report with drama in it '
            + 'gets discounted entirely, including the true parts.' }
  ]
});

PBE5.scene('u7-7-3-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your report says the delivery was unacceptably late.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was forty minutes late.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What crossed a line?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The shop was open. He took the goods. He did not complain.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what do you write?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"The delivery was forty minutes late."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nothing. That is the whole sentence.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ That is the whole sentence. And it is harder to write than the '
            + 'dramatic one, because it looks as though you have not taken it '
            + 'seriously.' }
  ]
});

PBE5.scene('u7-7-4', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nine cartons written off because the shop had shut, which was '
            + 'because the run left at 10.30, which was because picking started '
            + 'at 9.40, which was because the list prints at 7.15, which was '
            + 'because we have one person on the counter at opening, which is '
            + 'because we have never replaced the assistant who left in 2021, '
            + 'which is because of the economy.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Where did you get to?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The economy.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what can anybody in this building do about the economy?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then that link is true and useless, and it is worse than useless, '
            + 'because the moment Mr Ayoub reads because of the economy the whole '
            + 'report becomes a thing that could not be helped. ⚠ Stop at the '
            + 'last link somebody in this building can pull.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is the printing time.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Or the second person at opening — and those are different '
            + 'recommendations with different costs, so give him both and say '
            + 'which you would do.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the 2021 assistant? That is true as well.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is true and it is the explanation of why the printing time was '
            + 'never fixed, so put it in once, as background, not as the cause. ⚠ '
            + 'A chain with the recruitment in it as a link is a chain that ends '
            + 'in a hiring decision nobody is going to make this month; a chain '
            + 'that stops at the printer ends in something that can be done on '
            + 'Monday for nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the longest true chain is not the best one.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'The longest true chain is how you understand it. ⚠ The chain you '
            + 'write is the one that ends where somebody can act, and knowing the '
            + 'difference is most of what a report is.' }
  ]
});

PBE5.scene('u7-7-4-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We lost him because four calls were not returned, which was '
            + 'because the telephone rings out at lunch, which was because both '
            + 'staff go together, which is because there is nobody to cover, '
            + 'which is because we are one short since 2021, which is because of '
            + 'the last four years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where did you get to?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The last four years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what can anybody here do about that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that link is true and useless. ⚠ Stop at the last link '
            + 'somebody here can pull.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The lunch cover. They could go at twelve and one instead of together.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which costs nothing at all. Or a diverted line, which costs a '
            + 'little. ⚠ Give both and say which you would do.' }
  ]
});

PBE5.scene('u7-7-5', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: '"The late departure caused the loss of nine cartons." Can you prove that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The run was late, the shop shut, the load came back, it rained, '
            + 'the cartons are damp.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And if it had not rained?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Then the cartons would be dry and we would have delivered them on '
            + 'Wednesday.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So what caused the write-off?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The rain.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And what caused the load to be standing in the rain?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The late departure. So the departure led to it and the rain caused it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Closer. Now the third one. What contributed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That the yard has no cover on the north side, which we have known '
            + 'since 2019.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then you have three sentences and three different claims. ⚠ Caused '
            + 'says that but for this, nothing. Led to says this started the '
            + 'sequence. Contributed to says this made it worse or more likely '
            + 'and is not sufficient on its own.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does the difference matter if nobody is going to court?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'It matters more when nobody is. ⚠ If you write the late departure '
            + 'caused the loss, then Fadi caused the loss, and in two years when '
            + 'somebody reads the file that is what it will say — and the yard '
            + 'will still have no cover on the north side, because nothing in the '
            + 'file ever said so. ⚠ The weaker verb is not the softer one. It is '
            + 'the one that keeps the other two causes in the document.' }
  ]
});

PBE5.scene('u7-7-5-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: '"The lunch hour caused us to lose the customer." Can you prove that?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four calls went unreturned and he went elsewhere.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if the calls had been returned?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…He would probably have stayed. Probably.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it did not cause it. What caused it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He placed a standing order elsewhere. That is the thing that lost him.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the calls?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Led to it. And the lunch hour contributed, and so did having no '
            + 'answering machine, and so did a competitor two hundred metres '
            + 'away.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And price?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not a factor — he has said so in writing.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then get that in the report before somebody assumes it, because '
            + 'price is what everybody will assume.' }
  ]
});

PBE5.scene('u7-7-6', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Go through your own report and mark every sentence. S for what you '
            + 'saw, T for what you were told, I for what you worked out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The cartons are damp — S, I looked at them. The run left at 10.30 '
            + '— S, it is on the gate sheet.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The gate sheet is not your eyes. That is T.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is a document.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Written by somebody. A good T, and still a T. Keep going.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The shop had shut — T, Fadi said so. The load stood on the north '
            + 'side overnight — I did not see that either; Abu Yasser told me in '
            + 'the morning. T. Nobody telephoned the covered bay — that is… I do '
            + 'not actually know that. Nobody has said they did.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So what is it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'An inference. From the fact that the load was outside.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'A reasonable one and an inference. How much of your page is S?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The damp cartons. One sentence out of fourteen.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which is normal and is not a criticism — you were at the other '
            + 'site. ⚠ The danger is not that a report is mostly T and I; it is '
            + 'that a report which does not say so reads as fourteen '
            + 'observations. And then an inference that turns out wrong looks '
            + 'like a lie rather than a mistake.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write the three paragraphs separately.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Three paragraphs, always in that order, and the I paragraph last '
            + 'and shortest. ⚠ Nobody can argue with your S, most people will '
            + 'accept your T, and your I is the only part anybody can disagree '
            + 'with — so make it easy to find, because somebody disagreeing with '
            + 'your inference is the cheapest thing that can happen to this '
            + 'report.' }
  ]
});

PBE5.scene('u7-7-6-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Mark every sentence. S, T or I.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four calls were not returned — T, the telephone log. He went to '
            + 'Maarouf — T, he said so in his letter. The staff were both at '
            + 'lunch — T, Hala told me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How much is S?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None of it. I was at the other site every time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the sentence that says the calls are why he left?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That is an inference. His letter says he has moved his standing '
            + 'order. It does not say why.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So the central claim of your report is the one thing in it that '
            + 'nobody has stated.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He would say so if I asked him.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then ask him, and it becomes a T with a name on it. ⚠ Until you '
            + 'do, it goes in the last paragraph with I infer in front of it.' }
  ]
});

PBE5.scene('u7-7-7', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'There is a report about the cartons. Does it say it was me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sit down and I will read you the four lines that are about you. '
            + '"What caused the damage: rain. No person caused this damage." "The '
            + 'tachograph shows the route and the hours and both were correct." '
            + '"Fadi\'s driving, his hours and his route were not a factor."' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And the late departure?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Led to the load standing out. The departure was at 10.30 because '
            + 'picking started at 9.40 because the list prints at 7.15. Your name '
            + 'is not in that sentence and the printer is.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Somebody will still say the driver was late.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then they will be contradicted by page three, which is why page '
            + 'three exists.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There is one thing. It says I telephoned and the log says I did not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It says I cannot reconcile those and that the log is filled in '
            + 'from memory, so I am not preferring one over the other.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'I telephoned the counter, not the office. Different number. It '
            + 'would not be in that log at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Which log is the counter in?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There is no log on the counter. There has never been one. ⚠ So '
            + 'nobody can ever show that anybody telephoned the counter, which is '
            + 'the number on the side of my van.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a better finding than anything on my three pages, and it '
            + 'took you forty seconds.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'Because it is my number.' }
  ]
});

PBE5.scene('u7-7-7-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'There is a report about the pricing. Is it about me?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Sit down. Four lines are about you. "The counter copy was dated '
            + 'the 5th." "The trade band had been raised on the 8th and the '
            + 'counter copy had not been replaced." "The arithmetic on order 0914 '
            + 'was correct throughout." "She reported it on the Friday, before '
            + 'the customer telephoned."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does not say I priced it wrongly?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It says the list was wrong. You priced correctly from the document you had.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There is something. There were two copies. The second was in the '
            + 'van, because we take one to the Baghdad Street counter on '
            + 'Thursdays.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…So there were two copies dated the 5th, and one of them is still in a van.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is still there now.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That is a bigger finding than the one I wrote up.' }
  ]
});

PBE5.scene('u7-7-7-b', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The report says rain caused the damage, and it says in those words '
            + 'that no person caused it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The late departure led to the load standing out overnight. Your '
            + 'name is not in that sentence — the printing time is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three things contributed. There is no cover on the north side of '
            + 'the yard, which has been noted since 2019. The returns procedure '
            + 'has no overnight step. And the load came back after the warehouse '
            + 'closed, so nobody with a key to the covered bay was there.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And your driving, your hours and your route were not a factor — '
            + 'the tachograph shows all three and all three were correct.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'There is one thing. I telephoned the counter, not the office. '
            + 'Different number, so it would never be in the office log. And '
            + 'there has never been a log on the counter at all.' }
  ]
});
