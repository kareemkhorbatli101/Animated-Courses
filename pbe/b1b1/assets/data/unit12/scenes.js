/* Unit 12 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u12-12-1', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'The paper gives three options. What do you think?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I think maybe the repair is probably the best one, if we can afford it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say that again without think maybe, probably and if we can afford it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Repair it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a view. Now give me the reason and nothing else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'My own view is that we should repair it. The hire costs 1.8 '
            + 'million over three months to recover a loss of about 400,000 that '
            + 'has not grown since September, and the repair is 1.9 million once.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good. And what was the if we can afford it for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In case you said no.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which it would not have prevented, and it would have made the '
            + 'view not worth having. A view with an escape clause on it is a '
            + 'question wearing a statement\'s clothes, and I cannot agree or '
            + 'disagree with a question.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am the junior person in the room.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'You are, and that is the only reason I asked. The other three have '
            + 'told me what they think for twenty years and I know what they will '
            + 'say before they say it. ⚠ The junior person in the room is the '
            + 'only one whose view I do not already have, which makes it the most '
            + 'valuable one there — and they are the only one who hedges it into '
            + 'nothing.' }
  ]
});

PBE5.scene('u12-12-1-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What do you think about a second person on the counter?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I think maybe it would probably help, if the money is there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again without think maybe, probably and if the money is there.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…We should take somebody on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a view. Now the reason and nothing else.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'My own view is that we should take somebody on. Eleven calls went '
            + 'unreturned in October and four of those customers have ordered '
            + 'elsewhere since — about 900,000 of trade in one month against a '
            + 'salary of 650,000.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the if the money is there was for what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In case you said it was too expensive.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Which it would not have prevented — and your own figures say it '
            + 'is cheaper than not doing it, so the hedge was arguing against '
            + 'you.' }
  ]
});

PBE5.scene('u12-12-2', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'The gate count does not work. I have said so since September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It works between seven and four.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And after four I am on my own with two lorries and I count what I can.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then we agree about the afternoon and we disagree about the '
            + 'morning, and I want to say which is which before anybody repeats '
            + 'the sentence the gate count does not work.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Why does that matter?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because Mr Ayoub heard you say it last week and what he heard was '
            + 'that the control has failed. ⚠ If the sentence is the count is '
            + 'unreliable after four, that is a staffing decision about two hours '
            + 'a day. If it is the count does not work, it is an argument about '
            + 'whether to keep the control at all, and you would lose that '
            + 'argument and we would both be worse off.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'I would not lose it. The count is my own idea.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is, which is exactly why you should be the one who narrows it. '
            + '⚠ A man arguing that his own control works in the morning is '
            + 'believed; a man arguing that it does not work is believed too, and '
            + 'about the wrong thing.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So: it works until four and after four it is one man and two lorries.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'And I agree with the second half completely, and I will say so in '
            + 'front of him, and the figure is about eleven loads a week after '
            + 'four. ⚠ Agreeing with your afternoon costs me nothing and it is '
            + 'the only way the morning survives.' }
  ]
});

PBE5.scene('u12-12-2-pair', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Nobody uses the complaints book.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All nine written complaints this year are in it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I mean the telephone ones. I settle about a dozen a year and I '
            + 'have never written one up.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then we agree about the telephone ones and disagree about the '
            + 'written ones, and I want that said before somebody repeats nobody '
            + 'uses the complaints book.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why does that matter?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because the wide version invites somebody to decide the book is '
            + 'not worth keeping, and then the nine go too. ⚠ The narrow version '
            + 'is a procedure gap worth about a dozen entries a year, and it has '
            + 'a fix.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is what?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'A line in the book for same-day settlements, with your initials '
            + 'and no detail. ⚠ And I agree with your half completely — about a '
            + 'dozen a year is a third of all our complaints and none of them is '
            + 'recorded anywhere.' }
  ]
});

PBE5.scene('u12-12-3', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'I think we should repair the van, and admittedly it is nine years '
            + 'old and this may not be the last repair it needs.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That was going to be my objection.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'I know. It is the strongest thing against repairing it and it is '
            + 'true, and I would rather say it than have it said to me.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Does it not weaken your own case?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It weakens the version of my case that pretends there is no risk, '
            + 'which was never going to survive this room. ⚠ What is left is a '
            + 'case that has the risk in it and still comes out at repair, and '
            + 'that one you can act on.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Go on then.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'At nine years old we might get two years and we might get eight '
            + 'months. At 1.9 million, eight months is about 240,000 a month, '
            + 'which is still less than the hire at 600,000. ⚠ So the worst case '
            + 'for the repair is better than the hire, and that is the sentence I '
            + 'could not have reached without conceding the age.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'I have nothing to add to that, which is unusual.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'You had one thing to add and I used it.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Which is the whole trick, and it is not a trick. A concession '
            + 'you make yourself cannot be used against you, and the person who '
            + 'was going to make it has nothing left to say — and in this case '
            + 'what they had to say turned out to be the thing that proved your '
            + 'point.' }
  ]
});

PBE5.scene('u12-12-3-pair', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I think we should take on a second counter assistant, and '
            + 'admittedly eleven unreturned calls is one month\'s evidence and '
            + 'those four customers may have left for price.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That was going to be my objection.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I know. It is the strongest thing against it and it may well be '
            + 'true of two of the four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does that not sink your case?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It sinks the version where all four left because of the telephone, '
            + 'which nobody was going to believe. ⚠ What is left is this: if one '
            + 'of the four was lost to the telephone, the salary is covered by '
            + 'that one customer — he was ordering about 700,000 a month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One of four.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'One of four, and I do not have to prove which. ⚠ The case only '
            + 'needs one, and conceding the other three is how I got down to one.' }
  ]
});

PBE5.scene('u12-12-4', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'So we are agreed: the list changes on the first of the month. Does '
            + 'anybody have anything to add?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala, you have priced about sixty orders off that list. What '
            + 'happens at the counter on the first?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The first is the busiest morning of the month, because the trade '
            + 'customers come when their own month starts.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So on the first I am pricing from a list I have had for about '
            + 'twelve hours, with eight people waiting, and the old list is in my '
            + 'hand because the orders in front of me were taken last week on the '
            + 'old prices.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two lists in one hand on the busiest morning.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Which is exactly how October happened. ⚠ And the fifth would be '
            + 'the same work on the quietest morning of the month.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The fifth, then. Why did you not say so twenty minutes ago?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Because you asked whether anybody had anything to add, and I did '
            + 'not know whether the counter was part of the question.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Does anybody have anything to add is a question I have asked '
            + 'about four thousand times and I do not believe it has ever '
            + 'produced anything. It asks people to decide for themselves whether '
            + 'what they know is relevant, and the person who knows least is the '
            + 'most confident about that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the question that worked was about sixty orders she has priced.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Name the person, name the thing they have done, and ask about '
            + 'that thing. Three parts, and the first two are what make the third '
            + 'answerable.' }
  ]
});

PBE5.scene('u12-12-4-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So we are agreed: the new order form with a quotation-reference '
            + 'box. Does anybody have anything to add?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Hala, you take about thirty telephone orders a week — what will '
            + 'happen to that box?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'About half of them have no quotation at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the box will be blank on about fifteen forms a week. And a '
            + 'blank box is read later as a missing reference, not as there was '
            + 'no quotation.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is how October looked in the file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is exactly how October looked. ⚠ The form will manufacture '
            + 'about fifteen apparent faults a week, and in six months somebody '
            + 'will audit them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What would you do?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Two boxes, or one box with none printed in it. ⚠ A box you can '
            + 'tick to say there is nothing is worth more than a box you leave '
            + 'empty.' }
  ]
});

PBE5.scene('u12-12-5', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.46, bottom: 46, at: [0.33, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Before anybody stands up. So are we agreed: the list changes on '
            + 'the fifth, not the first; Nadia prints it; from January; and Hala '
            + 'has the old list for the orders taken before the change.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Not the last part.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'If she keeps the old list, two lists exist again and that is '
            + 'October. The orders taken before the change should be priced by me '
            + 'from the dated list in the file, not at the counter.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is better. It is about nine orders a month and I would rather '
            + 'not have them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: the fifth, Nadia prints it, from January, and pre-change '
            + 'orders are priced by Nadia from the file copy. Is that everybody?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I am writing it now, in front of you, because this is the '
            + 'fourth decision this year that I have written up two days later '
            + 'and asked three people what we had agreed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Which produced three answers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three answers and all three honest. ⚠ Nobody was misremembering on '
            + 'purpose; the decision had four parts and the room had agreed to '
            + 'about three each.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ And the one you have just found is the fourth part, which nobody '
            + 'would have remembered because we never actually agreed it — we '
            + 'stopped talking about it.' }
  ]
});

PBE5.scene('u12-12-5-pair', {
  set: 'signingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Before anybody stands up. So are we agreed: we will look at the '
            + 'van again in January.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We did not agree that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody objected.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody objected and nobody agreed. ⚠ We stopped talking about it — '
            + 'Samira raised the quotes and then the conversation went to the '
            + 'insurance.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Deferred to the 15th. You to circulate the three quotes by the '
            + '8th. ⚠ That is a decision about a decision and it is the only '
            + 'honest thing on the page.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It looks like we achieved nothing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'We achieved one thing, which is a date. ⚠ And in three weeks '
            + 'somebody will ask what we decided about the van, and there will be '
            + 'an answer — which is more than the last two times.' }
  ]
});

PBE5.scene('u12-12-6', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your paper on the Ghouta change. On the one hand, on the other '
            + 'hand, and then it ends.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is meant to be balanced.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'It is beautifully balanced and it has handed the decision back to '
            + 'somebody with less information than you. ⚠ Balance is how you get '
            + 'to a position; it is not a substitute for having one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I am genuinely undecided?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then write that, and write what would decide it. I am undecided '
            + 'and the thing that would settle it is whether Fadi can do the '
            + 'Harasta drops before eleven. That is a position — it is a position '
            + 'about what the question is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And on balance?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'On balance has to be followed by something that was not in either '
            + 'hand. ⚠ If your on balance just repeats the stronger side, you '
            + 'have not weighed anything — you have counted.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mine says on balance the change should go ahead.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Which side was that from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first one.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then your paper has one side in it and a decoration. ⚠ What does '
            + 'weighing look like? It looks like this: on balance the change '
            + 'should go ahead, because the Saturday problem is permanent and the '
            + 'Friday problem is one morning a week and can be managed by moving '
            + 'the wrap delivery. You have taken something from each hand and '
            + 'made a third thing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the wrap delivery was not in either hand.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ It is what weighing produced. That is how you know you did it.' }
  ]
});

PBE5.scene('u12-12-6-pair', {
  set: 'signingdesk',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your paper on the second assistant. Both hands and then it ends. '
            + 'Where do you stand?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ I am undecided, and I will say what would settle it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Whether the four customers who left in October left because of the '
            + 'telephone or because of price. If it is the telephone, one of them '
            + 'covers the salary. If it is price, a second person changes '
            + 'nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And can that be found out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi sees two of the four weekly. ⚠ Nobody has asked him, and it '
            + 'is one question.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then that is a position. It is a position about what the question '
            + 'is, and it is better than an on balance I would not have believed.' }
  ]
});

PBE5.scene('u12-12-7', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I am going to put my position to you before I put it to him, and I '
            + 'will start with the strongest thing against it, which is yours.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Friday is wrap morning and you cannot be at the gate and on the '
            + 'forklift. That is true, I agree with it completely, and nothing in '
            + 'my paper makes it untrue.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And you are still recommending Friday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am, because the Saturday objections cannot be changed by anybody '
            + 'here and yours can — the wrap can move to Thursday and Ms Shamsi '
            + 'says Thursday suits her better. ⚠ So my position is that your '
            + 'objection is the one worth solving, not the one worth losing on.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nobody has ever put it to me that way round.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there anything in it I have got wrong?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'One thing, and it is not about Friday. If the wrap comes Thursday, '
            + 'it comes on the day the Mezzeh counter does its own order, so '
            + 'Thursday morning has the wrap and the counter order and the Ghouta '
            + 'load for Friday all in the same four hours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is worse than what I have written down.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is worse on Thursday and better on Friday. ⚠ And you will not '
            + 'find it in any paper, because the Thursday counter order is a '
            + 'thing I do and nobody has written it down in eleven years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that goes in before Monday, and it goes in with your name on it.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Put it in with the eleven years as well. A thing nobody has '
            + 'written down for eleven years is the kind of thing a meeting needs '
            + 'to be told it did not know.' }
  ]
});

PBE5.scene('u12-12-7-pair', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I will start with the strongest thing against my position, which '
            + 'is yours. The 19th is the week the hotel order ships.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is true and I agree with it, and nothing in my paper makes it '
            + 'untrue. I am still recommending the 19th, because the year end '
            + 'cannot move and the hotel ship date can — they have asked us twice '
            + 'to hold it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nobody has put it to me that way round.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is there anything in it I have got wrong?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One thing. The hotel order is picked from racks four to seven, and '
            + 'those are the racks that have to be emptied for a count. ⚠ If we '
            + 'hold the ship date we still cannot count those racks, because the '
            + 'order is sitting in them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is not in any paper.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is not written down anywhere. ⚠ I know it because I pick it.' }
  ]
});

PBE5.scene('u12-12-7-b', {
  set: 'signingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I will start with the strongest thing against my position, which '
            + 'is yours. Friday is wrap morning and you cannot be at the gate and '
            + 'on the forklift. That is true and I agree with it completely.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am still recommending Friday, because the Saturday objections '
            + 'cannot be changed by anybody here and yours can. So my position is '
            + 'that your objection is the one worth solving, not the one worth '
            + 'losing on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there anything in it I have got wrong?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'One thing. If the wrap comes on Thursday it comes on the day the '
            + 'Mezzeh counter does its own order, so Thursday has the wrap, the '
            + 'counter order and the Friday Ghouta load in four hours.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'You will not find it in any paper, because the Thursday counter '
            + 'order is a thing I do and nobody has written it down in eleven '
            + 'years.' }
  ]
});
