/* Unit 18 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u18-18-1', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Who am I writing the Homs file for?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Somebody who does not work here yet. ⚠ Start with what they will not know.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They will not know who Mr Ayoub is.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ They will not know that, and two more things that matter more. ⚠ '
            + 'They will not know that the same person decided both times. And '
            + 'they will not know that nobody counted the walk-in trade, because '
            + 'nothing on the file says anybody should have.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what will they assume?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ That a decision with no reason on the file was obvious at the '
            + 'time. ⚠ That is the assumption a stranger always makes, and it is '
            + 'almost never true — because the reasons that get written down are '
            + 'the contested ones.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So an unrecorded reason looks like no reason needed.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It looks like a habit. ⚠ And on a file, five years later, a '
            + 'decision and a habit are indistinguishable — unless somebody wrote '
            + 'the reason, which is the whole of what you are doing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Ayoub will say it was obvious.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ He will say it was obvious that it was failing, which is true, '
            + 'and it is not the reason. ⚠ The reason is why he closed it rather '
            + 'than changing it — and that is the sentence nobody has ever asked '
            + 'him for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if he cannot remember?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then you write that he cannot remember, with the date you asked '
            + '— which is worth a great deal more than nothing and is the '
            + 'second-best document available.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the best?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ The one somebody should have written in November 2021, in about '
            + 'forty words, and nobody did — because nothing had to be done about '
            + 'it and there was nowhere for it to go.' }
  ]
});

PBE8.scene('u18-18-1-pair', {
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
      en: 'They will not know who Mr Ayoub is, who Bassel is, or what the '
            + 'administration office does.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. What else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the Homs file is in two places.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What else? Not a person and not a filing fact.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That the same person opened it and closed it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the first useful one. And what was never measured?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The walk-in trade. Nobody counted it until last month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So on the file as it stands, is the 2021 closure a decision or a habit?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'A habit. There is nothing behind it.' }
  ]
});

PBE8.scene('u18-18-2', {
  set: 'archive',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Page three refers to six documents. I can find two of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are all in the file somewhere.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Somewhere is not a reference. ⚠ And in 2032 four of the six will '
            + 'be in a box or will not exist — the 2021 board note is a loose '
            + 'sheet, the costing is on a spreadsheet nobody has opened since, '
            + 'and two of them are letters in a folder by month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I give better references.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ No. You write the context inside the document and then give the '
            + 'reference. ⚠ Three sentences, and they are the same three every '
            + 'time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which three?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What the company was then. What the practice was then. And what '
            + 'the figure meant then.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Give me them for Homs.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ In 2021 Sham Trading had two sites, one van and nineteen staff, '
            + 'and Homs was about a sixth of turnover. ⚠ The practice then was '
            + 'that stock was ordered against booked orders for every site, '
            + 'including Homs. ⚠ And 11.8 million was, at that date, about the '
            + 'turnover of the Mezzeh counter alone.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third one is the useful one.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is the one a stranger cannot reconstruct at all. ⚠ A figure '
            + 'without its scale is a figure that will be misread in either '
            + 'direction — and in 2032 nobody will know whether 11.8 million was '
            + 'large.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then the reference.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then the reference, and it is a bonus rather than the point. ⚠ A '
            + 'document that needs a reference to be understood is a document '
            + 'that stops working on the day somebody loses a folder — and a '
            + 'reference with nothing behind it is worse than none, because it '
            + 'tells a reader there is an answer somewhere and they cannot have '
            + 'it.' }
  ]
});

PBE8.scene('u18-18-2-pair', {
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
      en: 'The 2021 turnover was 11.8 million. That is a fact. It does not need help.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that large?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Large for what?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is my question. A reader in 2032 will have the same one and '
            + 'nobody to ask.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They can look up the company accounts.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They can. Will they, for one figure in a file note?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So give them the scale. Nine words.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About the turnover of the Mezzeh counter alone.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And now the figure cannot be misread in either direction.' }
  ]
});

PBE8.scene('u18-18-3', {
  set: 'archive',
  arr: 2,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'The old Homs file has nineteen first names in it. Abu Khalil. '
            + 'Ghassan. Someone called the Doctor.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And no offices.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'None. Who is the Doctor?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nobody knows, and that is the state the file is in — three of '
            + 'those nineteen are people this company has had no contact with '
            + 'since 2021.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The office first, then the person then in it, in brackets. ⚠ The '
            + 'counter supervisor at Mezzeh, then H. Mourad. Not Hala.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Everyone knows Hala.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Everyone here now. ⚠ In 2032 the useful half is the office, '
            + 'because the office is the thing a reader can look up — a name is '
            + 'only a name, and the firm will have had three counter supervisors '
            + 'by then.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And if the office does not exist any more?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You record it anyway, and you say it no longer exists. ⚠ The '
            + 'Homs branch office was a real office with real decisions attached '
            + 'to it, and a reader needs to know that decisions came from there '
            + 'and that there is nobody to ask.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'What about the ones I cannot identify?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You list them as unidentified, by name, with the documents they '
            + 'appear in. ⚠ It is a worse answer than an office and it is far '
            + 'better than leaving them in the prose as though they were obvious '
            + '— and if somebody recognises a name in 2032 the list is where they '
            + 'will look.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the Doctor?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Goes on that list, with the four letters he appears in and the '
            + 'dates. ⚠ Somebody in this company knows who he was — and there is '
            + 'an honest chance that it is Mr Ayoub and that nobody has ever '
            + 'asked him either.' }
  ]
});

PBE8.scene('u18-18-3-pair', {
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
      en: 'I have left "the Doctor" in the prose four times. Somebody will know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Somebody here.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Has anybody been asked, in five years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because it reads as though everybody knows.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the mechanism. On a list marked not identified it is a question.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And a question gets answered.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'In about nine minutes, as it turns out.' }
  ]
});

PBE8.scene('u18-18-4', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, why did you close Homs?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It was losing money. You have the figures.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I have the figures. That is why it was in trouble. ⚠ I am asking '
            + 'why you closed it rather than changing it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ Because I could not tell whether the counter trade had '
            + 'gone because of the site or because of the stock. ⚠ And I was not '
            + 'going to spend a year finding out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say more about that.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ If it was the site, restocking changed nothing and I would lose '
            + 'another year\'s rent. ⚠ If it was the stock, restocking fixed it, '
            + 'and it would have cost about four million to try, and I would '
            + 'still not have known which it was afterwards — because a shop that '
            + 'improves after restocking might just be a shop that got better '
            + 'weather.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So you closed it because the test was not worth the cost.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I closed it because the test was expensive and the answer was '
            + 'not reliable. Those are different things, and the second one is '
            + 'why.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the clearest thing on this file and it is not on the file.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It was obvious at the time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It was obvious to you. ⚠ The board note says the store closed. '
            + 'The audit file says when. Nothing anywhere says rather than.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ Nobody asked me. For five years. Not the auditor, not '
            + 'the board, not you until today.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No. And in April you hand over, and after that the sentence does '
            + 'not exist. ⚠ May I write it down in your words and bring it to you '
            + 'to sign?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Write it down. I will tell you where you have got it wrong, and '
            + 'you will find I remember the four million better than the rest of '
            + 'it.' }
  ]
});

PBE8.scene('u18-18-4-pair', {
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
      en: 'We closed it because it was losing money. The losses are in the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They are. That is why it was in trouble. Rather than what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The rent was going up as well.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Still the situation. Rather than what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Rather than restocking it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. And why closing rather than restocking?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Restocking cost about four million and we could not say what it would prove.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that one reason or two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two. The cost, and that it would not have told us anything.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which was the real one?' }
  ]
});

PBE8.scene('u18-18-5', {
  set: 'archive',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The van route. I put it to Mr Ayoub in December as a new idea.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is in the 2019 board note, rejected. ⚠ Page two, two lines.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Two lines. I spent three weeks on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And the two lines would have saved you the three weeks — which '
            + 'is the only argument for writing them that anybody ever needs.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Rejected for what reason?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That it would not hold stock. One van, three sites.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That reason has gone. We hire a second van four months a year now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is exactly why a rejected option needs its condition '
            + 'written beside it. ⚠ Not just rejected because but worth '
            + 're-examining if.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Say that again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ A rejected option with only a reason reads as closed for ever. ⚠ '
            + 'A rejected option with a condition reads as open the day the '
            + 'condition changes — and yours changed in 2024 and nobody noticed, '
            + 'because the note said rejected and stopped.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So I was right in December.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ You were right in December and you got there the expensive way. '
            + 'Three weeks, and you presented it as new, which means the board '
            + 'could not weigh it against what it was weighed against in 2019.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What would you have had me do?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ The same proposal, with a first line saying this was considered '
            + 'in 2019 and rejected because of the van, and the van has changed. '
            + '⚠ That is a stronger paper than mine was — because a proposal that '
            + 'has already survived one rejection on a reason that has since gone '
            + 'is a better thing than a new idea.' }
  ]
});

PBE8.scene('u18-18-5-pair', {
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
      en: 'If we record every rejected option the file fills up with things '
            + 'that did not happen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What did the van route cost Bassel in December?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the two lines in 2019 that would have saved them?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two lines.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And there is a second cost. The board weighed it in December against today.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It could not weigh it against 2019.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So one option has been decided twice, on different grounds.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And neither decision knows about the other.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is what the page prevents. Two lines.' }
  ]
});

PBE8.scene('u18-18-6', {
  set: 'archive',
  arr: 2,
  cast: {
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'sayegh', cam: { shot: 'wide' },
      en: 'Your index says: dates, people, reasons, options, the count.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Those are the pages.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ They are the pages, and nobody arrives at a file with a page in '
            + 'mind. ⚠ They arrive with a question, and your index makes them '
            + 'guess which heading it lives under.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: questions.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Index it as the questions a reader will actually have. ⚠ Why was '
            + 'Homs closed rather than restocked? Page 3, section 3.2. Not '
            + 'reasons.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Eight or ten. And at least three of them should be questions '
            + 'nobody has asked yet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I know what nobody has asked?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You have spent a week being the first person to ask most of '
            + 'them, so you are the best-placed person in the company to guess. ⚠ '
            + 'Which ones were hard to answer? Those are next time\'s questions '
            + 'too.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The hardest was why it closed rather than changed.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then that is question one, and the next reader will have it in '
            + 'about forty seconds.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the questions I cannot answer at all?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Those go in the index too, with not answerable from this file '
            + 'and what would be needed. ⚠ An index that lists only what the file '
            + 'can do is a sales document — the useful one tells a reader in one '
            + 'page what they will not get, so they stop looking here and start '
            + 'looking somewhere else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the opposite of how our files are built.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Our files are built to be stored. Yours is being built to be '
            + 'read by somebody with a deadline — and those produce different '
            + 'documents, which is most of what Unit 18 is about.' }
  ]
});

PBE8.scene('u18-18-6-pair', {
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
      en: 'I am not indexing what the file cannot answer. It advertises the weaknesses.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does a stranger do when they cannot find something?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Looks again.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Reads all six pages, decides they have looked badly, then reads them again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Probably.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then asks somebody, having spent half a day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the line saves them the half day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And names the two places that might still answer it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is more use than silence.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'A file nobody can navigate is not protected by silence. It is just slower.' }
  ]
});

PBE8.scene('u18-18-7', {
  set: 'archive',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Row four. A third Damascus site, discussed in 2019, no reason '
            + 'recorded. And in February we chose north over Damascus again, and '
            + 'there is no reason recorded for that either.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is the strongest finding in the file.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then it belongs on page one, not in a note at the foot of page four.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Put it on page one and then read it as a stranger will. ⚠ The '
            + 'same man decided it in 2019 and in 2027, and wrote down his '
            + 'reasons neither time. That is not a finding about a practice. That '
            + 'is a document about me.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is not meant as one.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ In 2032 nobody will know what it was meant as. ⚠ They will have '
            + 'the sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Ayoub, I also need your initials on section 3.2. It is the only '
            + 'record of why Homs closed and it does not exist without you.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I will initial my own words. I will not initial a file whose '
            + 'first page is that sentence. Those are two different requests and '
            + 'you have put them to me in one afternoon.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So the finding goes out because he will not sign.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No. And it does not go on page one in your form either. ⚠ You '
            + 'are both right, and you are right about different things.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Say which.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Bassel is right that it is the most important thing anybody has '
            + 'found, and a file that buries it in a footnote has failed at the '
            + 'only job it has. ⚠ Mr Ayoub is right that as written it is a '
            + 'document about him, because it names a person where the mechanism '
            + 'is the firm\'s — no form, no owner, nobody asking.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the mechanism is not an excuse.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ No. It is the finding. ⚠ A firm where a reason has nowhere to go '
            + 'will lose every reason it ever has, and it will go on doing that '
            + 'after you and I have both left — which is why it belongs on page '
            + 'one and why your name does not.' }
  ]
});

PBE8.scene('u18-18-7-b', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Ayoub, six names in the old Homs file I cannot trace. May I '
            + 'read them to you?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Read them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Khalil. Ghassan. Someone called the Doctor. And three first '
            + 'names in the daily sheets.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Abu Khalil was a carrier, from Hama, and he died in 2020. '
            + 'Ghassan was the branch supervisor\'s nephew and he held the keys — '
            + 'Ghassan Mardini, so he is on your list twice without you knowing '
            + 'it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the Doctor?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Dr Mikhail. A pharmacist. The landlord\'s brother-in-law. ⚠ He '
            + 'was consulted on the lease because the landlord wanted the unit to '
            + 'go to a pharmacy eventually and was taking advice on whether we '
            + 'would be easy to remove.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The unit was let to a chemist in 2022.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '(pause) ⚠ Yes. And I have never once put those two facts beside '
            + 'each other — not in 2021, and not when I heard about the chemist, '
            + 'and not until you read me a list of names you could not trace.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which means the landlord\'s refusal to allow a sublet in November '
            + '2021 was not about subletting.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It was about getting the unit back. Which I could have known in '
            + '2021 if I had asked the Doctor what he was a doctor of.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is five of the six, in about nine minutes.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ The three in the daily sheets I cannot help you with; those were '
            + 'a different kind of record. (pause) ⚠ You have asked me eleven '
            + 'questions this month, Nour. In sixteen years in that office nobody '
            + 'asked me eleven questions.' }
  ]
});
