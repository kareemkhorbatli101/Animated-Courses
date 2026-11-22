/* Unit 21 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u21-21-1', {
  set: 'quotetable',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Your first page argues that reopening Homs is the right decision.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It may be, and the board decided it on 4 February. ⚠ You have '
            + 'written eleven hundred words answering a question that is closed.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then what is open?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ How much of the 1.1 million we have to spend before we know '
            + 'whether it is working. ⚠ That is what Mr Sayegh asked me in the '
            + 'corridor last Tuesday, in those words, and it is the only thing '
            + 'anybody wants from this paper.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Nobody told me that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Nobody tells anybody. ⚠ Which is why you ask, and the useful '
            + 'form of the question is not what do you want to know but what are '
            + 'you going to do with this paper.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What is the difference?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The first gets you a topic and the second gets you a decision. ⚠ '
            + 'What do you want to know produces everything about Homs. What will '
            + 'you do with it produces decide whether to release the fit-out '
            + 'money in June or in September, which is a paper you can write in '
            + 'two pages.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if I cannot ask? If the reader is not available?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then write your guess at the question on the first line and let '
            + 'them correct it. ⚠ This paper answers one question: how much must '
            + 'be committed in June before the firm knows whether the site works. '
            + 'If that is the wrong question, they will tell you in eight seconds '
            + 'and you will have lost one line instead of eleven hundred words.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That feels like admitting I do not know what I am doing.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is the opposite. It is the only sentence in a proposal that '
            + 'cannot be misread — and a reader who disagrees with it has just '
            + 'given you the paper you should have written.' }
  ]
});

PBE8.scene('u21-21-1-pair', {
  set: 'quotetable',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have to write a paper about our vehicle costs. They want the '
            + 'whole picture.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What will they DO with it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Decide about the two leases that expire in September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the question is whether to renew or to buy, by when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By August, because the leases need three months\' notice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Has any part of that been decided already?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That we keep three vehicles. That was settled in March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how much of your draft is about fleet size?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two pages of four.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is half a paper answering a question from March.' }
  ]
});

PBE8.scene('u21-21-2', {
  set: 'quotetable',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your three options. A is the full amount in June. B is the full '
            + 'amount more slowly. C is not reopening.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Three options.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ A and B are the same option at two speeds, and C was rejected in '
            + 'February. ⚠ So it is one option wearing three hats, and a reader '
            + 'can see that in about four seconds.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What should the three be?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Apply three tests and they will fall out. ⚠ One: could a '
            + 'sensible person choose each of them? Two: do they differ in '
            + 'something other than degree? Three: has any of them already been '
            + 'decided?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'B and A differ in degree.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ They differ in nothing else, so they are one option with a dial '
            + 'on it — and a dial belongs inside an option, not between two.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So what is a real third option?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The 1.9 million unit, which you have never put in writing and '
            + 'which Mr Ayoub asked about in February. ⚠ Twice the floor, three '
            + 'hundred thousand more a year, and a completely different '
            + 'proposition — and it fails test one for you and passes it for '
            + 'somebody who thinks the site will work.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I think that option is wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which is 21.5 and we will come to it. ⚠ The point now is that it '
            + 'is an option a sensible person could choose, and leaving it out '
            + 'does not remove it from the board\'s mind — it removes it from '
            + 'your paper, where you could have answered it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if they can see which one I want?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ They always can and that is fine. ⚠ What they must not be able '
            + 'to see is that the others were put there to lose — because a '
            + 'reader who spots that stops reading the options and starts looking '
            + 'for what else you have arranged.' }
  ]
});

PBE8.scene('u21-21-2-pair', {
  set: 'quotetable',
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
      en: 'Option A is renew both leases. Option B is renew both but on three '
            + 'years instead of five. Option C is renew both on two years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What do those three differ in besides the number of years?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nothing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is one option with a dial. Where does the dial belong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Inside the option.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what are the real alternatives?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Buying. And handing them back and hiring.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The second one you have not written down. Why not?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because I think it is wrong.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is not a reason to leave it out. It is the reason to answer it.' }
  ]
});

PBE8.scene('u21-21-3', {
  set: 'quotetable',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'I have left out doing nothing. The board has decided to reopen.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The board decided to reopen. It has not yet spent anything. ⚠ '
            + 'And between now and the first invoice, doing nothing requires no '
            + 'decision, no capital and no signature — which makes it the '
            + 'strongest option in the room and the only one with no champion.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Nobody is proposing it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Nobody ever proposes it. It arrives by itself, in June, as a '
            + 'postponement — and a postponement nobody has priced is '
            + 'indistinguishable from a decision nobody has taken.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Three costs, and it always has all three. ⚠ One: what you do not '
            + 'earn — a seventh year on two sites, about 2.3 million of northern '
            + 'turnover at Hala\'s counts. ⚠ Two: what you lose that was '
            + 'available — the Hama road unit goes to somebody else in about four '
            + 'months, and the next one may not be sixty square metres at 1.1. ⚠ '
            + 'Three: what gets harder — every month of delay is a month further '
            + 'from the February count, and in September somebody will say the '
            + 'count is stale, and they will be right.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The third one is the worst.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The third one is the one that is never written, and it is how '
            + 'most postponements become permanent. ⚠ The evidence for the '
            + 'decision decays while nobody is deciding — and then the honest '
            + 'answer in September is we would have to count again, which is '
            + 'another two months.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'May I write doing nothing is not an option?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ You may, and it is the single most useless sentence in business '
            + 'writing. ⚠ It tells a reader that you would rather not price it. '
            + 'Doing nothing is always an option. It is frequently the option '
            + 'that is taken. And it is the only one that happens without anybody '
            + 'choosing it.' }
  ]
});

PBE8.scene('u21-21-3-pair', {
  set: 'quotetable',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I will write that doing nothing is not an option.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does that sentence tell the reader?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the status quo is unacceptable.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It tells them you would rather not price it. Who is most likely to '
            + 'choose it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The people reading the paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the gap in your paper is exactly where their own preference lives.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Put like that it is the worst place to have a gap.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the three costs take four lines. What do you not earn?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 420,000 of handling capacity, on the maintenance log.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is somebody else\'s figure. Good. Keep going.' }
  ]
});

PBE8.scene('u21-21-4', {
  set: 'quotetable',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'You have five assumptions. Which of them can anybody check?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The fit-out cost. We have three quotations.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ So that is not an assumption, it is a figure with a range. ⚠ '
            + 'Move it. What else?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The 196 a week. Eight weeks of trading would show it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Testable, and your option B is the test. ⚠ Say that explicitly, '
            + 'because it is the strongest thing in your paper and it is '
            + 'currently implicit.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And the northern wholesale trade coming back. Nobody can check that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then assume it at nil and say you have.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That takes two million out of my projection.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It does, and the projection that remains is one somebody will '
            + 'act on. ⚠ A nine-million projection with two million of untestable '
            + 'upside in it is a seven-million projection that a reader will '
            + 'discount to five, because they cannot tell which part is which — '
            + 'so you lose four by keeping two.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if the wholesale trade does come back?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then you have a surprise on the good side, which is the only '
            + 'kind anybody forgives. ⚠ And you write it in as a note: not in the '
            + 'projection; if it returns, add about 2 m. The reader keeps the '
            + 'information and the arithmetic stays clean.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What is the list actually for, then?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Two things, and the second matters more. ⚠ It tells a reader '
            + 'which parts of your case are claims and which are arithmetic. ⚠ '
            + 'And in eighteen months, when something has gone wrong, it tells '
            + 'everybody which assumption failed — and whether anybody could have '
            + 'known.' }
  ]
});

PBE8.scene('u21-21-4-pair', {
  set: 'quotetable',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I cannot take the export recovery out. It is probably real.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How much of your projection is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 1.2 of the 4.8.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Can the reader separate it from the other 3.6?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Not as it stands.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what will they do with 4.8?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Discount it. Probably to three and a half.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have lost 1.3 by keeping 1.2.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I take it out, I have a 3.6 that nobody argues with.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And a note saying add 1.2 if it happens, which they keep and do '
            + 'not discount.' }
  ]
});

PBE8.scene('u21-21-5', {
  set: 'quotetable',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Option C. Three lines, and the third says the floor is more than we need.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Read it as Mr Ayoub will. ⚠ He asked for that option in February '
            + 'and gave reasons, and your three lines do not contain any of them.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I disagree with his reasons.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then disagree with them, which requires stating them. ⚠ What you '
            + 'have written is a caricature, and a caricature is dangerous to the '
            + 'person who writes it — because the moment somebody states the real '
            + 'case in the meeting, your paper looks as though it had not '
            + 'understood it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'What does the option need?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Three things. ⚠ One: the best thing about it, in its own terms, '
            + 'with a figure — twice the floor for 300,000 a year more, which is '
            + '1.4 million of turnover at our margin. ⚠ Two: the condition under '
            + 'which it is right — if the northern market is larger than the '
            + 'count showed. ⚠ Three: your reason for thinking that condition is '
            + 'not met, and how a reader could check.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if I write all that, somebody may choose it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Somebody may. That is what putting an option in a paper means.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then I have written a paper that can defeat me.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You have written a paper that can be acted on, which is the only '
            + 'kind worth writing. ⚠ And here is the part you have not seen: if '
            + 'the board chooses C on the strength of your own fair statement of '
            + 'it, you have lost an argument and kept everything else — your '
            + 'figures, your judgement, and the next paper you write.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if I caricature it and win?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then you have won once, and the next time you argue against '
            + 'something, Mr Sayegh will look for what you have left out — ⚠ and '
            + 'he will be right to, and you will have spent something you cannot '
            + 'get back for a decision that went your way anyway.' }
  ]
});

PBE8.scene('u21-21-5-pair', {
  set: 'quotetable',
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
      en: 'There is honestly nothing good about hiring. It costs 40 per cent '
            + 'more a day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who proposed it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The hire firm. And our own sales manager, in April.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What did he say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That if volumes fall we are stuck with vehicles for five years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that nothing?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is cheap insurance, if you think volumes will fall.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How cheap? Give me the figure in its own terms.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 90,000 a year buys the right to be wrong about 2028.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is the best point in the paper and you were going to leave it out.' }
  ]
});

PBE8.scene('u21-21-6', {
  set: 'quotetable',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Your last paragraph asks for the board\'s guidance on the way forward.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That is the polite form.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is the form that produces nothing. ⚠ Nobody can give guidance '
            + 'and nobody can be held to it — and in four weeks neither you nor '
            + 'they will be able to say what was decided on 28 May.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So what are the parts?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four. ⚠ What you want decided, as a verb with an object: release '
            + '640,000. Who decides it: the board, not the firm. When: on 28 May, '
            + 'at that meeting and not in due course. And what happens if they do '
            + 'not decide it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The fourth sounds like a threat.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is a timetable, and it only sounds like a threat if you write '
            + 'it like one. ⚠ If capital is not released on 28 May, the fit-out '
            + 'cannot start before July and the eight-week test ends in September '
            + 'rather than July. That is not pressure, it is arithmetic, and the '
            + 'board is entitled to it before deciding rather than after.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And there is a part of the paper that is not asking for anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then say so, in its own line. ⚠ The wholesale question is not a '
            + 'decision for 28 May; it is noted so that nobody later thinks it '
            + 'was overlooked. An unmarked non-ask gets treated as an ask by '
            + 'somebody, and then refused, and then you have lost a point you '
            + 'were not making.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'How long should the whole thing be?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Four lines. And it goes at the top as well as the bottom — the '
            + 'same four lines, word for word, not a shorter version at the top.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Why the same words?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Because somebody will read one of the two and quote it. ⚠ If the '
            + 'two versions differ by a word, that word is what the meeting will '
            + 'be about — which is Unit 6 at B2 and the only lesson in this '
            + 'course that has cost this firm money twice.' }
  ]
});

PBE8.scene('u21-21-6-pair', {
  set: 'quotetable',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I would be grateful for the owner\'s guidance on how to proceed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What will the minute say in four weeks?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That it was discussed.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what will you do on the strength of it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. I will wait to be told.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And he will wait to be asked. What verb do you want?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Approve. Approve 335,000.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who? When?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The owner, on 20 June.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And that is the first time anybody in this conversation could be '
            + 'held to anything.' }
  ]
});

PBE8.scene('u21-21-7', {
  set: 'quotetable',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Section 5 is too strong. If the board reads it properly they may '
            + 'take option C, and I recommend against C.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'You wrote it properly because I made you. You cannot now unwrite it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Nour. You are my manager. Tell me to soften it and I will.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '(pause) ⚠ I want to and I am the wrong person to want it. ⚠ If the '
            + 'board takes option C I am committing 1.9 million on a reopening I '
            + 'argued against in December — so of the three people in this room I '
            + 'have the largest personal reason to see your section 5 weakened, '
            + 'and that is exactly why I am not going to touch it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then my paper may lose on my own writing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Read me your last sentence again.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '"A reader who takes the wholesale trade seriously should choose '
            + 'option C, and such a reader would not be making a mistake — they '
            + 'would be disagreeing with me about one number that neither of us '
            + 'can check."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Say the last six words again.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Neither of us can check.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And every option on your page assumes that stays true. ⚠ Why?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…Because nobody in this firm can measure the northern wholesale trade.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The unit next door has been empty for nine months. ⚠ Take the '
            + 'sixty square metres, and take a written option over the adjoining '
            + 'sixty for six months at a fee. Then the wholesale question is '
            + 'testable: eight weeks of trading tells you the walk-in count, and '
            + 'if the wholesale enquiries come in you exercise the option in '
            + 'November at a price agreed in May.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is not any of the three options.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No. It is a fourth, and none of us saw it until he wrote the '
            + 'third one honestly. ⚠ A caricature of option C would have hidden '
            + 'it, because you cannot find the test for an assumption you have '
            + 'not stated as an assumption.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And it is your option, not mine.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ It is your paper. I would not have found it reading a paper with '
            + 'three lines of straw in the middle of it — and I am going to the '
            + 'board recommending something I argued against in December, which '
            + 'is the part of this that costs me.' }
  ]
});

PBE8.scene('u21-21-7-pair', {
  set: 'quotetable',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Section five states option C fairly. Stated fairly, it may defeat '
            + 'my own recommendation.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then your own paper will have done it. That is what a paper '
            + 'written properly does.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I could state it narrowly and nobody would notice for a year.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'You would notice. A paper written properly cannot be unwritten '
            + 'once the writer has seen where it leads.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Nour has the largest personal reason to want section five weak.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which is exactly why she will not touch it, and she says so.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then there is a fourth option that neither of us wrote. Sixty '
            + 'square metres, with a written option over the adjoining sixty.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'For how long, and at what?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Six months, at about forty-five thousand. Nour found it, after '
            + 'being told not to look.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Then her name goes in the paper against it. You give up the '
            + 'authorship and the firm gets the option.' }
  ]
});

PBE8.scene('u21-21-7-b', {
  set: 'quotetable',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Well?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ They took the fourth option. Sixty square metres and a written '
            + 'option over the adjoining sixty, for six months.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the fee?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Forty-five thousand. Mr Sayegh asked twice whether that was a '
            + 'real figure or a round one, and it is a real one — the agent has '
            + 'it in writing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'What did Nour have to say to them?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ That she argued against the reopening in December, that she was '
            + 'wrong about neither threshold, and that she was now recommending a '
            + 'larger commitment than the one she had opposed. ⚠ She said it in '
            + 'the first two minutes rather than being asked.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And the paper?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Section 6 says the fourth option was not in the first draft, '
            + 'that it became visible only when section 5 was written fairly, and '
            + 'that Nour found it. ⚠ I wrote that. She told me not to and I wrote '
            + 'it anyway, because it is true and because a paper that takes '
            + 'credit for somebody else\'s idea is a paper nobody checks the rest '
            + 'of.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what did I give up?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Nothing. You said so at the time and you were right — you held '
            + 'the line on one section and it produced the whole answer.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And what have you learned, since you will be asked?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ That a caricature is not a cheap win, it is an expensive one. ⚠ '
            + 'If I had left my three lines in, the board would have taken option '
            + 'B, I would have got what I wanted, and nobody would ever have '
            + 'found the fourth option — because the thing that produced it was '
            + 'the word untestable, and a caricature of option C would not have '
            + 'contained it.' }
  ]
});
