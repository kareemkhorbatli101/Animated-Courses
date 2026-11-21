/* Unit 14 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u14-14-1', {
  set: 'planning',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Your February note says trade will be better, the export side will '
            + 'grow, costs will be stable and the counter will be quieter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is what I think will happen.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'It is four opinions. Put a number on each line and three of them '
            + 'will change.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Trade — between 44 and 50 million, against 46 in January.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So trade is flat, or very slightly up. You wrote better.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Yes. Better was the feeling and the range is flat.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Export?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One order, maybe two. If it is one, that is about 8 million; if it '
            + 'is two, 16.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then the export line is the only one in the note that can move the '
            + 'month, and you put it second. Costs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Stable, except the plater, who has put his price up 12 per cent — '
            + 'so about 2 million more.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which is not stable. The counter?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'February is always quiet. Call it 15 per cent down on January, '
            + 'which is what it was last February and the one before.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Now it is a forecast. Four lines, four numbers, and the shape of '
            + 'the month has changed completely: the counter is down, costs are '
            + 'up, trade is flat, and the whole of February depends on whether '
            + 'Beirut orders once or twice. ⚠ A forecast with no number on any '
            + 'line is not a forecast; it is a mood, and a mood cannot be wrong, '
            + 'which is the problem with it.' }
  ]
});

PBE6.scene('u14-14-1-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My note says trade will be better, export will grow, costs will be '
            + 'stable and the counter quieter.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is four opinions. Put a number on each line.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Trade — between 44 and 50, against 46 last month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So trade is flat. You wrote better.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes. Better was the feeling and the range is flat.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And which line can move the month?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Export, because it is eight million or sixteen and everything else '
            + 'is within a million of January.' }
  ]
});

PBE6.scene('u14-14-2', {
  set: 'planning',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Account sales are down eleven per cent and the counter is up four. Why?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Two things changed in the same fortnight, which is the worst '
            + 'possible arrangement. The rate moved, and we issued a new price '
            + 'list on the 6th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So it is the price list.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It may be the price list. It may equally be the rate, because our '
            + 'account customers buy in bulk and a bulk buyer feels a rate move '
            + 'before a counter customer does.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which do you think?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'I think it is probably the price list, and I am not going to write '
            + 'that, because probably in a note to Mr Ayoub becomes because by '
            + 'the time it reaches the Thursday meeting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then what do you write?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Account sales are down eleven per cent. Two things changed in '
            + 'the same fortnight: the rate and the new price list. On the '
            + 'evidence I cannot separate them. And then the sentence that earns '
            + 'the note: here is how we could.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How could we?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The price list went to account customers only. The counter list '
            + 'did not change. ⚠ So if it is the price list, the counter should '
            + 'be unaffected — and the counter is up four per cent. That points '
            + 'at the list. But the rate would also push a bulk buyer to wait, '
            + 'which would show as account sales down and no change at the '
            + 'counter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So both explanations fit what we can see.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Both fit, which means what we can see does not decide it, and '
            + 'saying so is the finding. The test is to telephone four account '
            + 'customers and ask. ⚠ A cause you cannot separate from the evidence '
            + 'you have is separated by asking somebody, not by thinking harder.' }
  ]
});

PBE6.scene('u14-14-2-pair', {
  set: 'planning',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Returns are up from about two a week to nine. It is the new carton.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It may be the carton. Two things changed in the same fortnight: '
            + 'the new carton from Ms Shamsi, and we started loading from the '
            + 'north door while the covered bay was repaired.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which do you think?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I think the carton, and I am not going to write it. ⚠ Here is how '
            + 'we could separate them: look at what kind of damage the nine have. '
            + 'If it is crushing, it is handling and the door; if it is damp, it '
            + 'is the north door and the weather; if the carton is splitting '
            + 'along a seam, it is the carton.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if it is a mixture?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then it is both, which is the answer nobody writes down and is '
            + 'commoner than either — and the repair is two repairs, not one.' }
  ]
});

PBE6.scene('u14-14-3', {
  set: 'planning',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'You wrote that Beirut would probably order again in February. I '
            + 'have bought against it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How much?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Twenty-four cartons, which is the same as the trial. If the order '
            + 'does not come they sit until the summer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I meant — more likely than not. Six in ten. Perhaps seven.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I read probably as nine in ten. That is what I mean by it when I write it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then we have a word that means six to one of us and nine to the '
            + 'other, and twenty-four cartons have been bought on the difference.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And neither of us was careless. ⚠ The word is the problem, and it '
            + 'is a very common word.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I should have written six in ten.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Or a range: between five and seven in ten. Either one is '
            + 'actionable — at six in ten I buy twelve cartons, not twenty-four, '
            + 'and at nine I buy twenty-four. The number is not decoration; it is '
            + 'the quantity.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I genuinely do not know?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then say that, and say what would move it. ⚠ I do not know. One '
            + 'order, from a buyer I have never met, is not enough to forecast a '
            + 'second. What would move it is her own February programme, which I '
            + 'could ask for. ⚠ That is a better note than any number I could '
            + 'have invented, because it tells me to buy nothing yet and tells '
            + 'you what to do on Tuesday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the rule is: a number, a range, or I do not know with the thing '
            + 'that would move it.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ And never the bare adverb. Probably on its own is a feeling with '
            + 'a date attached — and the person who acts on it is never the '
            + 'person who wrote it.' }
  ]
});

PBE6.scene('u14-14-3-pair', {
  set: 'planning',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You wrote that we would probably need Saturday cover in March. I '
            + 'have promised the work to two people.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How firmly?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They have told their families. One of them has turned down something else.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I meant four in ten. It depends on the Beirut order and on whether '
            + 'the counter picks up.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I read probably as eight in ten. ⚠ And the cost here is not stock. '
            + 'It is two people who have arranged their month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '…Then I should have written four in ten, and do not promise anything yet.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Which would have taken six words and cost nothing.' }
  ]
});

PBE6.scene('u14-14-4', {
  set: 'planning',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your note says the figures were probably checked against the gate sheets.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They were. I am fairly sure they were.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then that sentence does not say what you mean. As written, you are '
            + 'telling me the checking is in doubt — which for an auditor is the '
            + 'only interesting thing on the page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What does it say?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'It says: somebody may or may not have checked these figures. If '
            + 'what you mean is that they were checked but you are not certain '
            + 'which sheets, write that. ⚠ The hedge has to sit next to the thing '
            + 'you are uncertain about, and in your sentence it is sitting next '
            + 'to the one thing you are sure of.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am sure the checking happened. I am not sure every sheet was there.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then: the figures were checked against the gate sheets; two of the '
            + 'January sheets were probably missing. ⚠ Two sentences, and the '
            + 'doubt is now on the sheets, where it belongs.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And we will probably ship on Tuesday against we probably will ship '
            + 'on Tuesday?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The first is a forecast. The second is an answer to somebody who '
            + 'has said you will not. ⚠ The second position is argumentative and '
            + 'it is almost never what you want in writing, because the reader '
            + 'has not contradicted you yet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the ordinary place is after the first auxiliary.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Will probably · have probably · is probably · are probably going '
            + 'to. ⚠ And with a single verb and no auxiliary, before the verb: he '
            + 'probably knows. ⚠ It is a small rule and it decides which half of '
            + 'your sentence a reader doubts — which in a document about figures '
            + 'is the whole of what the document is for.' }
  ]
});

PBE6.scene('u14-14-4-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My claim letter says we only sent two cartons on the 14th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it says sending was all we did. Is that the claim?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. The claim is that two is the quantity and we were invoiced for twelve.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then: we sent only two cartons on the 14th. The adverb goes next '
            + 'to the number, because the number is the dispute.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the first version?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ The first version reads as an excuse, and in a claim an excuse '
            + 'invites a reply about something other than the quantity — which is '
            + 'exactly what the other side wants.' }
  ]
});

PBE6.scene('u14-14-5', {
  set: 'planning',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Say the February plan in the form by the end of February we will have.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By the end of February we will have shipped forty-eight cartons to '
            + 'Beirut, we will have trained Lina on the export paperwork, and we '
            + 'will have counted the fourth store.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Forty-eight. Where does forty-eight come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twenty-four in January and twenty-four in February.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the February twenty-four is six in ten, by your own note. So '
            + 'by the end of February we will have shipped twenty-four, or '
            + 'forty-eight, and the honest sentence has two numbers in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By the end of February we will have shipped between twenty-four '
            + 'and forty-eight.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Better. Now the other two. Who trains Lina?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Bassel, in February.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And who counts the fourth store?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Bassel and Abu Yasser, in February.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then say both sentences aloud, one after the other, in the '
            + 'future perfect, and listen to them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By the end of February Bassel will have trained Lina. By the end '
            + 'of February Bassel will have counted the fourth store. …They are '
            + 'the same fortnight and he is one man.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ That is what the tense is for. The present tense lets you plan '
            + 'two things for one person in February and never notice. ⚠ Put both '
            + 'in the future perfect and say them next to each other, and the '
            + 'impossibility is audible.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the tense is a test and not a decoration.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ It is the only tense that forces you to stand at the end of the '
            + 'month and look back, and the view from there is different: from '
            + 'here February is a list, and from there it is four weeks with one '
            + 'Bassel in them.' }
  ]
});

PBE6.scene('u14-14-5-pair', {
  set: 'planning',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Say the February plan in the form by the end of February we will have.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By the end of February we will have shipped forty-eight cartons, '
            + 'trained Lina, and counted the fourth store.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Forty-eight. Where does forty-eight come from?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twenty-four and twenty-four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the second is six in ten, so the honest sentence has two '
            + 'numbers in it. Now: who trains Lina?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Bassel.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And who counts the fourth store?' },
    { who: 'a', cam: { shot: 'close' },
      en: '…Bassel and Abu Yasser. ⚠ They are the same fortnight and he is one man.' }
  ]
});

PBE6.scene('u14-14-6', {
  set: 'planning',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Your February board. I have not read the figures yet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are on the first page.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I never read the figures first. I read the three lines under '
            + 'them, because the figures are arithmetic and the assumptions are '
            + 'the forecast.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The three assumptions. One: the rate holds at its January level. '
            + 'Two: Ms Shamsi\'s price does not change before April. Three: the '
            + 'plater\'s twelve per cent is the only cost rise.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Number two. When did you write this?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yesterday, the 28th.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Ms Shamsi telephoned me on the 27th. She is putting her carton '
            + 'price up four per cent from the 1st of March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Then assumption two is already wrong and I wrote it the day after '
            + 'it failed.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Which is not a criticism of you; it is the reason the block '
            + 'exists. ⚠ An assumption nobody has written down cannot be checked '
            + 'by the one person who happens to know it has failed. I knew on the '
            + '27th and I would not have thought to tell you, because I did not '
            + 'know your forecast depended on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the block is for the readers and not for me.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is a list of questions you are asking the room. Three lines, '
            + 'each of which somebody in this building may already know the '
            + 'answer to. ⚠ And you only find out by printing them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What does four per cent from March do to February?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Nothing. ⚠ And that is the second thing the block gives you: when '
            + 'an assumption fails you can see at once whether it matters, '
            + 'instead of re-doing the whole board. February stands. March is a '
            + 'different forecast and you now have three weeks\' notice of it, '
            + 'which you would not have had.' }
  ]
});

PBE6.scene('u14-14-6-pair', {
  set: 'planning',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'This forecast assumes. One: the rate holds. Two: Ms Shamsi\'s '
            + 'price is unchanged before April. Three: the plater\'s twelve per '
            + 'cent is the only rise.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Number two. When did you write this?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yesterday, the 28th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ She telephoned me on the 27th. Four per cent from the 1st of March.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Then assumption two is already wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And does it matter for February?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'No. ⚠ So February stands and March is a different forecast — and I '
            + 'have three weeks\' notice of it instead of none.' }
  ]
});

PBE6.scene('u14-14-7', {
  set: 'planning',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have the February board. May I ask something about it rather than in it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'How much weight will it bear? Because I am going to use it to '
            + 'decide what to order for the counter, and I do not know whether to '
            + 'treat it as a fact or as a guess.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody has asked me that in four years of writing them.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then what is the answer?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three questions, and you can ask them of any forecast anybody ever '
            + 'gives you. First: which line can move the total, and how good is '
            + 'the evidence under that line? Here it is the Beirut order, six in '
            + 'ten, resting on one order from a buyer I have never met.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So the biggest line has the thinnest evidence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is normal and not a scandal. The large lines are the new '
            + 'ones and the new ones have the least history. Second: which '
            + 'assumptions have a name against them, and has anybody actually '
            + 'asked those people? Here, two of four have been asked.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ What was the last one of these wrong by? My January board said '
            + 'account sales 44 to 48 and they were 46. It said costs 30 to 31 '
            + 'and they were 31.4. ⚠ So on the evidence of one month, these '
            + 'boards are about half a million out on costs and right on sales — '
            + 'and that is the only honest answer to your question, because it is '
            + 'measured rather than claimed.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'So I can lean on the counter line and not on the export line.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You can lean on the counter line because it has two Februaries '
            + 'behind it, and you must not order anything on the export line at '
            + 'all until Tuesday. ⚠ And a forecast that is wrong is not the same '
            + 'thing as a forecast you cannot trust. This one will be wrong. ⚠ '
            + 'What makes it trustworthy is that you can see where it is likely '
            + 'to be wrong, by how much, and which way — and that is the '
            + 'difference between a document and an opinion.' }
  ]
});

PBE6.scene('u14-14-7-pair', {
  set: 'planning',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What was the last one wrong by?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I have never written down what my last one was wrong by.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Have you still got the forecast?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. And the outturn, in the ledger.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then you can answer the question in ten minutes, once, and after '
            + 'that it is one line a month.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I said the counter would do about six and it did 5.2.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ So you are about fifteen per cent over on the counter, and the '
            + 'next person who reads your board should be told that — because '
            + 'they will otherwise take your 5.8 as 5.8.' }
  ]
});

PBE6.scene('u14-14-7-b', {
  set: 'planning',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'How much weight will the February board bear?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three questions. Which line can move the total, and how good is '
            + 'the evidence under it? Here it is the Beirut order, six in ten, '
            + 'resting on one order from a buyer I have never met.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which assumptions have a name against them, and has anybody asked '
            + 'those people. Two of the four have been asked.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What was the last one wrong by. My January board was right on '
            + 'sales and about half a million under on costs.' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'So I can lean on the counter line and not on the export line.' }
  ]
});
