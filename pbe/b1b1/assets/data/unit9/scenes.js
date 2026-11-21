/* Unit 9 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u9-9-1', {
  set: 'stocktake',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The pallet that came back from Mr Haffar. What happened to it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It was lifted from one side. You can see it from two things. The '
            + 'base boards are split across the middle and the top ones are not, '
            + 'so the weight was all on the centre. And there are two tine marks '
            + 'about forty centimetres apart on the underside, and ours are '
            + 'ninety.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So it must have been a forklift with narrow tines.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It can only have been a forklift with narrow tines, which is a '
            + 'stronger thing to say and is also true. A pallet truck would not '
            + 'split the base like that and a hand truck leaves no tine marks at '
            + 'all.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And whose forklift?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That I do not know and I am not going to guess. Narrow tines are '
            + 'common. ⚠ Half the yards in Mezzeh have a small forklift and so '
            + 'does the market.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was on our lorry for two hours.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It was, and nobody lifted it on the lorry, and if you want to say '
            + 'so in writing the reason is that it was strapped and the straps '
            + 'were still on when it came back. That is worth more than my '
            + 'opinion about forklifts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: lifted by a narrow-tine forklift, not on our vehicle, and we '
            + 'cannot say by whom.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'And one more thing, which is the useful one. ⚠ It was lifted after '
            + 'it was wrapped, because the wrap is torn at the tine marks and not '
            + 'anywhere else. So it was not damaged in our warehouse before '
            + 'loading.' }
  ]
});

PBE5.scene('u9-9-1-pair', {
  set: 'stocktake',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The carton from the Aleppo load. What happened to it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was rained on from above, not stood in water. You can see it '
            + 'from two things. The top and three sides are damp and the base is '
            + 'dry, so the water came down and not up. And the damp stops about '
            + 'two thirds of the way down each side, which is where water running '
            + 'off a flat top would reach.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So it must have been outside.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It can only have been outside, uncovered, because a leaking roof '
            + 'would mark one side and a flooded floor would mark the base.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In whose yard?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That I do not know and I am not going to guess.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was transhipped at Homs.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And the useful one: the label is unmarked and perfectly legible, '
            + 'so it was labelled after it dried — which means somebody handled '
            + 'it dry, somewhere, and did not report it.' }
  ]
});

PBE5.scene('u9-9-2', {
  set: 'stocktake',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' },
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Two rolls of wrap have torn at the core. It may be a batch fault '
            + 'and I am not saying it is.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'What have you looked at?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four rolls. The two that tore are batch 8814 and the two that are '
            + 'fine are 8790 and 8803. So it is possible that 8814 is bad and it '
            + 'is also possible that two rolls out of a hundred tore for no '
            + 'reason.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'How many of 8814 have you got?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nine. Seven unopened.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Then open one and pull it by hand at the core. If it tears, it is '
            + 'the batch. If it does not, use the seven and tell me if another '
            + 'goes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if it is the batch?' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Then I have about four hundred rolls of it and you have told me on '
            + 'a Tuesday rather than in January. ⚠ I would rather have this '
            + 'telephone call than a polite one in six weeks.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I nearly did not make it. Two rolls out of a hundred is not much.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Two rolls is nothing. A batch number is everything. ⚠ You did not '
            + 'telephone me about two rolls; you telephoned me about a number '
            + 'that appears on four hundred rolls, and the difference between '
            + 'those two calls is the only reason this one is useful.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I will open one this afternoon and tell you either way.' },
    { who: 'shamsi', cam: { shot: 'close' },
      en: 'Either way. ⚠ Most people only come back when it is bad news, so a '
            + 'no is worth as much to me as a yes.' }
  ]
});

PBE5.scene('u9-9-2-pair', {
  set: 'stocktake',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The small press stops about once a week. It may be the heat and I '
            + 'am not saying it is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What have you looked at?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six stoppages since September. All six were between one and four. '
            + 'All six were on jobs over about two hundred pieces.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is possible that it is the heat, and it is also possible '
            + 'that it is the long runs.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the two cannot be separated, because the long runs are all in '
            + 'the afternoon.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the test separates them. Run a two-hundred-piece job at eight '
            + 'in the morning, three days running.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody has done that because everybody knows it is the heat.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Everybody knows it because it stops in the afternoon, which is '
            + 'also when the long jobs are. It takes three mornings to find out '
            + 'and it has been nine months.' }
  ]
});

PBE5.scene('u9-9-3', {
  set: 'stocktake',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nadia — that cannot be the total on the Shamsi statement.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because it is 1.4 million and there are two invoices on the front '
            + 'page at 900,000 and 700,000. The total cannot be less than the sum '
            + 'of two of its own lines.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'No, it cannot. Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I nearly wrote the total looks wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which I would have checked and found to be right, because it is '
            + 'right — the arithmetic on this statement is correct. ⚠ What is '
            + 'wrong is that one of those two invoices is not ours; it is 700,000 '
            + 'for a customer called Mansour, and I have been looking at my own '
            + 'surname on somebody else\'s invoice for about four minutes without '
            + 'seeing it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the total is right and the statement is wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The total is right and the statement contains an invoice that '
            + 'belongs to somebody else. ⚠ Which I would not have found from the '
            + 'total looks wrong, because I would have added it up, found it '
            + 'correct and stopped.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The objection found a different thing from the one I thought I was '
            + 'objecting to.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'It usually does. ⚠ A specific objection gets investigated and a '
            + 'vague one gets checked — and checking means adding it up again, '
            + 'which confirms whatever the document already says.' }
  ]
});

PBE5.scene('u9-9-3-pair', {
  set: 'stocktake',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'That cannot be the delivery time on this note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because it says 7.20 and the gate sheet shows the load leaving at '
            + '10.30. It cannot have been delivered before it left.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No, it cannot. Good.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I nearly wrote the times do not look right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which I would have checked against the schedule and found to be '
            + 'right. ⚠ What is actually wrong is that the time is pre-printed — '
            + 'every note we issue carries the scheduled time, and has for two '
            + 'years.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So no delivery note in the building records an actual time.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Not one, since 2023. ⚠ And we have settled two claims using those times.' }
  ]
});

PBE5.scene('u9-9-4', {
  set: 'stocktake',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Nour — the Tarabishi order. Before I telephoned you I looked at '
            + 'three things.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The order book, which shows it taken on the 22nd for forty. The '
            + 'picking list, which shows forty. And the gate sheet, which shows '
            + 'thirty-eight out and a note of two held back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the question is why two were held back.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is not my question any more, because the note says two '
            + 'damaged, replaced from the next delivery in Abu Yasser\'s hand. So '
            + 'the order is complete and the invoice is for forty and he has '
            + 'thirty-eight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which means the invoice is wrong.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The invoice is right if the two are going out on Thursday and '
            + 'wrong if they are not. That is the only thing I cannot see, and it '
            + 'is the only thing I am telephoning about.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are going out on Thursday. I booked them yesterday.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then there is nothing to do and I will note it on the order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala — how long did the three checks take?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'About a minute.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Last month you would have telephoned me and I would have looked '
            + 'at the same three things, except that I would have done it after '
            + 'the call rather than before it, and it would have taken me four '
            + 'minutes and a walk to the warehouse. The minute is the whole '
            + 'difference and it is yours rather than mine.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It also means I asked you one question instead of four.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Which is the part that matters. Three of those four questions '
            + 'had answers in this building and only one of them needed me.' }
  ]
});

PBE5.scene('u9-9-4-pair', {
  set: 'stocktake',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The Shamsi September invoice. Before I telephoned you I looked at '
            + 'three things.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The purchase ledger, which shows it entered on 2 October. Both '
            + 'October payment runs, which do not include it. And the bank '
            + 'statement, which shows no payment.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the question is why it was not paid.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not quite my question, because the ledger has a pencil '
            + 'mark against it that I think is yours. The only thing I cannot see '
            + 'is whether it was held deliberately.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It was. The delivery was two rolls short and nobody noted it '
            + 'anywhere except that pencil mark.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the thing to fix is not the payment, it is that a held '
            + 'invoice has no reason written against it.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Which is a better finding than the one you telephoned about.' }
  ]
});

PBE5.scene('u9-9-5', {
  set: 'stocktake',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The wrap will definitely arrive on Thursday, the credit will '
            + 'probably be settled this week, and the auditor\'s list will '
            + 'possibly be finished by Friday.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Take those three words and tell me what each one costs if it turns '
            + 'out wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Definitely — if the wrap does not come on Thursday, the Ghouta run '
            + 'goes out without it and four customers get an apology, and the '
            + 'next time I say definitely nobody believes it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The second part is the expensive one. And the credit?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Probably — if it is not settled, nothing happens, because probably '
            + 'has already told whoever is reading it to plan for both.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So probably is almost free, and definitely costs you the word '
            + 'itself. And possibly?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Possibly costs nothing at all if it is wrong, which is why it is '
            + 'the one I use when I have not looked.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'There it is. ⚠ Possibly is the most misused word in business '
            + 'writing, because it is free. It is doing honest work when you have '
            + 'looked and genuinely do not know, and it is doing dishonest work '
            + 'when it means I have not looked.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And nobody can tell which from the outside.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Nobody — which is exactly why the discipline has to be yours. ⚠ '
            + 'The repair is one clause: possibly, and what I have not checked is '
            + 'the carrier\'s schedule. A hedge with its reason attached cannot '
            + 'be used to hide behind.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And definitely?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Spend it about four times a year. ⚠ It is the only one of the '
            + 'three that is worth anything, and it is only worth anything '
            + 'because of the occasions on which you did not use it.' }
  ]
});

PBE5.scene('u9-9-5-pair', {
  set: 'stocktake',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The goods will possibly arrive before Thursday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does possibly cost if it turns out wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. I have hedged it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what have you checked?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nothing. I have not telephoned the carrier.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the true sentence is not possibly. What is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I have not asked the carrier and I will do so this morning.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Which is a worse-looking sentence and a better one, because '
            + 'somebody reading possibly would have planned around it and '
            + 'somebody reading yours will wait twenty minutes and get a real '
            + 'answer.' }
  ]
});

PBE5.scene('u9-9-6', {
  set: 'stocktake',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have photographed the pallet but the insurer wants it described '
            + 'in the report as well.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then write it so that I could draw it without the photograph. '
            + 'Three things in every line: where, how big, and what it is next '
            + 'to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The base boards are split.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which boards, how long is the split, and where does it start?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two of the five base boards, the middle two, split across the '
            + 'width, about forty centimetres each, starting at the centre and '
            + 'running towards the near edge.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Now I can draw it. And the word you have not used is the useful one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Damaged?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'You have not used it, which is why the sentence works. ⚠ Damaged '
            + 'is a conclusion wearing the clothes of a description: it tells me '
            + 'you have decided something and not what you can see. Split, '
            + 'crushed, torn, bent, soaked — those I can draw. Damaged I cannot.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what is sound? Do I say that?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Always. The top boards are sound is as much a fact as the split, '
            + 'and in six months it will be the sentence that matters, because '
            + 'somebody will claim the whole pallet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The two cartons on the split side are crushed on their lower corners.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which corners, and how far up?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The corner nearest the split, about ten centimetres up on both.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ About ten centimetres on both. That both is doing more work than '
            + 'anything else in your description, because two identical marks are '
            + 'a mechanism and one is an accident.' }
  ]
});

PBE5.scene('u9-9-6-pair', {
  set: 'stocktake',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'It is a carton. One lower corner is crushed, about 10 cm up.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where does it start?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'At the corner itself, running about 8 cm along each of the two '
            + 'faces that meet there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what is sound?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The top, the other three corners and all four sides above the crush.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is the mark on one or on both?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ On one corner only. There is a 15 cm tear in the wrap over that '
            + 'corner and nowhere else.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Now I can draw it.' }
  ]
});

PBE5.scene('u9-9-7', {
  set: 'stocktake',
  arr: 0,
  cast: {
    haffar: { rig: 'm-30s-a', name: 'Mr Haffar', voice: 'en-US-ChristopherNeural', shirt: '#3f6b63', shirt2: '#32554f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'haffar', cam: { shot: 'wide' },
      en: 'The pallet. Was it my man with the forklift or was it yours?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I can tell you three things and the third is the one you want. It '
            + 'was lifted by a machine with tines about forty centimetres apart; '
            + 'ours are ninety. It was lifted after it was wrapped, because the '
            + 'wrap is torn at the tine marks and nowhere else. And it was not '
            + 'lifted on our lorry, because the straps were on when it came back '
            + 'and both were intact.' },
    { who: 'haffar', cam: { shot: 'mid' },
      en: 'So it was us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was a narrow-tine machine after wrapping and not on our '
            + 'vehicle. Whose machine, I cannot say and I am not going to. There '
            + 'is one in the market and at least two on your street.' },
    { who: 'haffar', cam: { shot: 'mid' },
      en: 'Mine is forty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So is the market\'s.' },
    { who: 'haffar', cam: { shot: 'mid' },
      en: 'You could have said it was mine and I would probably have accepted it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I know, and the credit is going out either way, so there would '
            + 'have been nothing in it for me.' },
    { who: 'haffar', cam: { shot: 'mid' },
      en: 'There is one thing. It did not come off my lorry at my gate. ⚠ It '
            + 'went to the market first because the driver had another drop, and '
            + 'it was lifted off and on again there — I did not know that until I '
            + 'asked him this morning, and I asked him because you had said after '
            + 'wrapping.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is the forklift, probably, and neither of us owns it.' },
    { who: 'haffar', cam: { shot: 'close' },
      en: 'Probably. ⚠ And I would not have gone and asked him at all if you '
            + 'had told me it was my man, because I would have paid it and been '
            + 'annoyed with him for a month.' }
  ]
});

PBE5.scene('u9-9-7-pair', {
  set: 'stocktake',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Three things about the short delivery. Our gate count agrees with '
            + 'the order at forty. Your goods-in sheet shows thirty-eight. And '
            + 'the seal number on your sheet is 4471 and the seal on our gate '
            + 'sheet is 4468.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So somebody opened it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A seal was changed between our gate and your door. Who changed it, '
            + 'I cannot say and I am not going to.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It went on a shared lorry.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is the first thing anybody has told me that I could not have '
            + 'found here.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And it was tipped at Harasta, because the other load was for '
            + 'Harasta. ⚠ I know that because our sheet has the driver\'s second '
            + 'name on it and he is not the man who left your yard.' }
  ]
});

PBE5.scene('u9-9-7-b', {
  set: 'stocktake',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.17, 0.62],
      pose: 'rest' },
    haffar: { rig: 'm-30s-a', name: 'Mr Haffar', voice: 'en-US-ChristopherNeural', shirt: '#3f6b63', shirt2: '#32554f',
      full: true, scale: 0.62, bottom: 30, at: [0.75, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I can tell you three things. It was lifted by a machine with tines '
            + 'about forty centimetres apart, and ours are ninety.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It was lifted after it was wrapped, because the wrap is torn at '
            + 'the tine marks and nowhere else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it was not lifted on our lorry, because the straps were fitted '
            + 'when it came back and both were intact.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whose machine it was, I cannot say and I am not going to. There is '
            + 'one in the market and at least two on your street. And the credit '
            + 'is going out either way.' },
    { who: 'haffar', cam: { shot: 'close' },
      en: 'There is one thing. It went to the market first, because the '
            + 'driver had another drop, and it was lifted off and on again there. '
            + 'I only asked him because you said "after wrapping".' }
  ]
});
