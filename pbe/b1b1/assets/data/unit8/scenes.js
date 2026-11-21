/* Unit 8 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u8-8-1', {
  set: 'boardroom',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The Tarabishi invoice is 12,000 out. In our favour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long have you known?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Since this morning. I was going to wait until he queries it, '
            + 'because he may not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If I were you I would telephone him today. Two reasons. He goes '
            + 'through his invoices on a Thursday, so you have about thirty '
            + 'hours; and he telephones Mr Ayoub about once a month, so if he '
            + 'finds it the conversation is not with you.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if I telephone and he had not noticed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you have told a customer you overcharged him and corrected it '
            + 'before he asked, which is the only version of this story that is '
            + 'any use to you.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Would you say anything about why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would say the figure and that it is our error and that a credit '
            + 'is raised. ⚠ I would not explain the price list, because the '
            + 'moment you explain, it sounds like a reason it might happen again.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if he asks why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then tell him, in one sentence. ⚠ There is a difference between '
            + 'answering a question and volunteering a system.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'You are not telling me to do it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'No — it is your invoice and your customer, and if you decide to '
            + 'wait I will not go behind you. But you asked me what I would do, '
            + 'and that is what I would do, and I would do it before one '
            + 'o\'clock.' }
  ]
});

PBE5.scene('u8-8-1-pair', {
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
      en: 'Lina has mis-entered nine stock cards. I was going to correct them '
            + 'myself and say nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If I were you I would tell her today, before she goes home. Two '
            + 'reasons. The count is on Monday, so if you do not tell her '
            + 'somebody else finds it in front of four people; and she will do it '
            + 'again on Thursday, because she does not know she is doing it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if she takes it badly?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then she takes it badly today from you, rather than on Monday from '
            + 'the stock sheet.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Would you say anything about it being nine?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I would say nine, because the number is the thing that stops it '
            + 'sounding like a complaint about her. ⚠ I would not go through all '
            + 'nine with her — I would show her two and let her find the rest.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'You are not telling me to do it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'No. But you asked what I would do, and I would do it before she goes home.' }
  ]
});

PBE5.scene('u8-8-2', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'If we moved the Ghouta run from Tuesday and Thursday to Wednesday '
            + 'and Saturday, what would stop working?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is a better question than the one I was asked last year.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What were you asked last year?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Would it work. And I said yes, because it would, and then two '
            + 'things broke and everybody was surprised.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what would stop working?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two things. The Saturday counter is one man, and if the van went '
            + 'out on a Saturday he would be on his own with the gate as well — '
            + 'and that is the morning the walk-in trade comes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Ms Shamsi\'s wrap comes in on Wednesday mornings. If the van were '
            + 'out, nobody would be here to take it off the lorry but me, and I '
            + 'cannot be at the gate and on the forklift.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Neither of those is in anybody\'s plan.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'They are in mine. Nobody asked me what would break; they asked me '
            + 'whether it would work. ⚠ Would it work is a question you can '
            + 'answer yes to and still be right, and it tells the person asking '
            + 'nothing at all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if we moved it to Wednesday and Friday instead?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Then only the wrap breaks, and the wrap could come on a Thursday '
            + 'if anybody asked her. ⚠ Which nobody has, in four years, because '
            + 'the Wednesday delivery is in the standing order and the standing '
            + 'order is not a thing people look at.' }
  ]
});

PBE5.scene('u8-8-2-pair', {
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
      en: 'If we banked twice a week instead of daily, what would stop working?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two things, and one of them is not about banking.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The float would have to about double, because Thursday\'s takings '
            + 'would sit here until Sunday and we pay the yard men on a Thursday '
            + 'out of the till.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The insurance covers cash on the premises up to a figure. I do not '
            + 'know the figure. ⚠ Nobody has read that policy since 2019 and we '
            + 'would be doubling the thing it limits.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not a reason against. It is a thing to find out.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is — and if the figure is low it is a reason against, and if it '
            + 'is high it is nothing. Either way I would not change the banking '
            + 'before somebody reads it.' }
  ]
});

PBE5.scene('u8-8-3', {
  set: 'boardroom',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your paper says the new list would save two hours a week, would '
            + 'reduce pricing errors and would free Hala for the counter. Which '
            + 'of those three have you measured?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The two hours. I timed it for three weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The errors I have not measured. There have been two this year and '
            + 'both were the old list.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then that is might. Two is not a pattern.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And freeing Hala?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Is that a thing that follows from the change, or a thing somebody '
            + 'would then have to decide?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Somebody would have to decide. The hours exist but she would not '
            + 'automatically be on the counter.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then it is could. Could is what becomes possible; might is what '
            + 'may happen on its own. ⚠ They are not two strengths of the same '
            + 'thing — could is about permission and possibility and usually '
            + 'needs a second decision, and if you write would for it somebody '
            + 'will think it is included.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So one would, one might and one could.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'And the would is the one he will read, because it is the only one '
            + 'you have measured. ⚠ A paper with three woulds in it reads as '
            + 'three guesses, and then the measured one is worth no more than the '
            + 'other two — which is a waste of your three weeks.' }
  ]
});

PBE5.scene('u8-8-3-pair', {
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
      en: 'Your paper says the second van would restore four Ghouta days, '
            + 'would bring back the two customers, and would allow a Saturday '
            + 'run. Which have you measured?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The four days. That is arithmetic — two vans, four days, it is how '
            + 'it was until August.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the two customers?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not measured. They halved their orders in August and have not changed since.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is might, and it may be weaker than that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is. They have not said they would come back. ⚠ It is we do not know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the Saturday run?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Could. The van would exist; whether anybody works Saturday is a '
            + 'different decision and I have not asked.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So one would, one we-do-not-know, one could — and the would is the '
            + 'only one he will act on.' }
  ]
});

PBE5.scene('u8-8-4', {
  set: 'boardroom',
  arr: 0,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'I can hold the Aleppo price for three months if I know what you will take.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the answer is yes, provided two things, and I will put both '
            + 'in writing because they are mine to give.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Provided the quantity is forty rolls a month and not forty-five — '
            + 'I can defend forty every month of the year, including August.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'As long as the delivery day moves from Wednesday to Thursday. That '
            + 'is not about the wrap; it is about a van.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Thursday is better for me. Nobody has asked me about the day in four years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know, and that is our fault and not yours.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Would you like a third condition? That I tell you before the price '
            + 'moves rather than after.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You already do that, which is why this conversation is possible at '
            + 'all. ⚠ And I would rather not write it down, because a condition '
            + 'nobody will check is a condition somebody will one day point to — '
            + 'and the only thing it would achieve is making a four-year habit '
            + 'look like an obligation.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Most people would write it down.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Most people write down everything they can get and then nobody '
            + 'reads the page. ⚠ Two conditions I will enforce are worth more '
            + 'than five I will not, and you will know which kind you are '
            + 'reading.' }
  ]
});

PBE5.scene('u8-8-4-pair', {
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
      en: 'I want to be able to send back anything I have not used.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the answer is yes, provided two things, and both are mine to give.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Provided it is in the original packaging — not because of the '
            + 'packaging but because unwrapped stock cannot go back on a shelf. '
            + 'And as long as it comes back inside fourteen days, which is how '
            + 'long the price is held, so the credit matches the invoice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And should I telephone first?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I would like you to, and I am not going to make it a condition.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Because the day you forget, somebody here will point at the '
            + 'sentence and refuse a return I would have accepted. I would rather '
            + 'you telephoned because it helps than because it is a rule.' }
  ]
});

PBE5.scene('u8-8-5', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'You might want to write to the bank before the 30th. Two reasons '
            + 'and a figure.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The facility is reviewed on the 30th, and they review on the last '
            + 'three months, which are the best three months since 2022 — the '
            + 'counter is up about a fifth and the second site is trading. If the '
            + 'letter arrives after the review, the next one is in April.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the figure?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The three months are 14.2 million against 11.6 for the same '
            + 'quarter last year. The letter is one page and I have drafted it; '
            + 'it is in your tray and it is not signed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You have drafted it and not signed it and not sent it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is your letter and your bank.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Do you know what almost everybody who has ever worked for me does '
            + 'with a thing like this?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tells you about it in March.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Or tells me now and leaves out the draft, so that saying yes costs '
            + 'me an evening. ⚠ Or writes it, signs it in my name and tells me '
            + 'afterwards, which has happened twice and both times I would have '
            + 'sent the letter and both times I was angry for a week about '
            + 'something else entirely.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What was the something else?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Not being able to say no without a fuss. ⚠ You might want to is '
            + 'not politeness — it is the form of words that leaves me able to '
            + 'say no in one syllable, and because of that I have said yes to '
            + 'about four things this year that I would have argued with.' }
  ]
});

PBE5.scene('u8-8-5-pair', {
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
      en: 'You might want to write to the supplier before the end of the '
            + 'month. She has not been paid for September and she telephones you '
            + 'monthly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I will leave it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You are not going to ask why?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'No. It is yours and you said no. If something changes I will bring it back.' }
  ]
});

PBE5.scene('u8-8-6', {
  set: 'boardroom',
  arr: 2,
  cast: {
    caller: { rig: 'm-30s-a', name: 'Caller', voice: 'en-GB-ThomasNeural', shirt: '#5a5a5a', shirt2: '#484848',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'caller', cam: { shot: 'wide' },
      en: 'I need wrap for pallets of tinned goods. Which one do I want?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three questions first, if I may. How far do the pallets travel, '
            + 'are they double-stacked, and is anything loaded by hand at the '
            + 'other end?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'Aleppo. Not stacked. Hand-unloaded, yes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then from what you have told me the standard 17-micron is probably '
            + 'right and the heavy-duty would be money you do not need to spend. '
            + 'Tins are heavy and stable and the load is not stacked, so the wrap '
            + 'is holding a shape rather than carrying a weight.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'The man I spoke to yesterday said heavy-duty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'He may know something I do not — did he ask about stacking?' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'He did not ask me anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I would not weight his answer above mine, and I would not '
            + 'weight mine too heavily either, because there is one thing I '
            + 'cannot see and it matters: how the pallets are handled at the '
            + 'Aleppo end. ⚠ If they are dragged rather than lifted, the standard '
            + 'will tear at the base and the heavy-duty will not, and nobody on a '
            + 'telephone can know that.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'So what do I do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Buy four rolls of the standard, not forty. Send one load. If it '
            + 'arrives without tearing, the standard is right and you have saved '
            + 'about a third. If it tears at the base, you know something about '
            + 'Aleppo that nobody told you and the heavy-duty is worth it.' },
    { who: 'caller', cam: { shot: 'mid' },
      en: 'You have just talked yourself out of a larger order.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'For about a fortnight. ⚠ And if the four rolls are right, you will '
            + 'buy forty of something from me rather than four hundred of '
            + 'something from somebody else once.' }
  ]
});

PBE5.scene('u8-8-6-pair', {
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
      en: 'I want to buy a year of packaging at today\'s price. Can you hold it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three questions first, if I may. How much do you use in a month, '
            + 'has that been steady for a year, and where would you keep it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About thirty rolls. It has gone up a bit. In the yard, under a sheet.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then from what you have told me I would not do a year, and that is '
            + 'advice against my own interest.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Three hundred and sixty rolls under a sheet in a yard will not all '
            + 'be saleable in August — and a held price is only a bargain if the '
            + 'market rises, and I cannot see what the market will do any better '
            + 'than you can.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Everybody says it will rise.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Everybody said that last February and it fell. I would buy a '
            + 'quarter, and if it rises you have lost very little and if it falls '
            + 'you have not bought a year of it.' }
  ]
});

PBE5.scene('u8-8-7', {
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
      en: 'Two options on the van. Repair it at 1.9 million, or hire for '
            + 'three months at 600,000 a month.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Where is the third one?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There are only two.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'There are always three. The third is do nothing, and you have left '
            + 'it out because you do not want it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Doing nothing costs 400,000 a month in halved orders.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Does it? You told me in September that two customers had halved '
            + 'their orders. Have they halved them again since?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…No. It has been flat since September.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So the 400,000 happened once and has not grown. Which makes doing '
            + 'nothing a real option rather than a straw man, and it makes your '
            + 'paper better and not worse.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It also makes the hire look worse, because 600,000 a month to '
            + 'recover 400,000 is not a saving.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now you have a paper. ⚠ And here is why I always ask. A paper with '
            + 'two options in it has already decided, and I can either agree with '
            + 'it or have an argument — and I have been having that argument '
            + 'since 1998 and I usually lose it, because the person who wrote the '
            + 'paper has thought about it for a week and I have had it for four '
            + 'minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the third option is for you.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'The third option is for you, because with it in you found out that '
            + 'the hire is not worth it, and you found that out before I did. ⚠ '
            + 'Without it you would have won, and we would have hired a van.' }
  ]
});

PBE5.scene('u8-8-7-pair', {
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
      en: 'Two options on the counter telephone. An answering machine at '
            + '180,000, or stagger the lunch hour at no cost.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Do nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does doing nothing cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four customers in October.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And since October?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…None that I can identify.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it was four in one month and nothing in two. Which makes the '
            + 'machine hard to justify.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And makes the staggered lunch obviously right, because it costs '
            + 'nothing and would have prevented all four.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ So the honest third option did not argue for doing nothing. It '
            + 'argued against the expensive option and left the free one '
            + 'standing.' }
  ]
});

PBE5.scene('u8-8-7-b', {
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
      en: 'Two options on the van. Repair it at 1.9 million, or hire for '
            + 'three months at 600,000 a month.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Where is the third one? There are always three. The third is do nothing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Doing nothing costs 400,000 a month in halved orders.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Have those customers halved them again since September?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. It has been flat since September. So the 400,000 happened once '
            + 'and has not grown — which makes the hire worse, because 600,000 a '
            + 'month to recover 400,000 is not a saving.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Now you have a paper. And without the third option you would have '
            + 'won, and we would have hired a van.' }
  ]
});
