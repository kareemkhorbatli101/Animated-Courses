/* Unit 16 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u16-16-1', {
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
      en: 'The Homs carton is eleven per cent cheaper than Ms Shamsi\'s. '
            + 'Eleven per cent on four hundred cartons a month.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Cheaper to buy. Read me the quotation in full.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Eight hundred and ninety per hundred, ex-works Homs.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Ex-works. So who brings them?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…We do. Ms Shamsi delivers.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is a van to Homs and back, which Fadi cannot do on a Tuesday '
            + 'or a Thursday because of the Ghouta run. Next: how many must you '
            + 'take?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Minimum five hundred.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And we use four hundred, so you are holding a hundred for a month '
            + 'and paying for them now. Payment terms?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Thirty days against Ms Shamsi\'s sixty.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So thirty days of our money, every month, for ever. And the last '
            + 'one: what happens when a batch is wrong?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I do not know. With Ms Shamsi it is eleven years and she has never '
            + 'argued about a replacement.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Now add it up. Eleven per cent off the price; add the journey, '
            + 'the hundred cartons you do not need, the thirty days, and an '
            + 'unknown on returns. ⚠ The all-in figure is about four per cent '
            + 'dearer — and the eleven per cent is still true. Both numbers are '
            + 'correct and they are answers to different questions.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So which question should I have asked?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Not what does it cost but what does it cost to have it in our '
            + 'warehouse, on our terms, with our van. That is the landed cost, '
            + 'and ⚠ a quotation is not a price, it is a price with four '
            + 'conditions attached and the conditions are where the money is.' }
  ]
});

PBE6.scene('u16-16-1-pair', {
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
      en: 'The new plater is fourteen per cent cheaper a tonne.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Cheaper to buy. Who carries it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We do, and he is forty minutes further out than ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how long does he take?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine working days against four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So every job gains a week. When do you pay him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On collection.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And what happens when a batch comes back wrong? He has never '
            + 'done our profile. The fourteen per cent is real and the nine days '
            + 'is a fortnight added to every job we quote.' }
  ]
});

PBE6.scene('u16-16-2', {
  set: 'quotetable',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The letter to Ms Tannous says we are the cheapest supplier of our '
            + 'range in Damascus, the oldest in the Mezzeh trade, and one of the '
            + 'most reliable in the city.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Three superlatives. Which of them can you prove on Thursday if she asks?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The oldest — 1998, and we have the registration.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'In the Mezzeh trade?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…We moved to Mezzeh in 2011. We were founded in 1998 in Bab Touma.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So the oldest in the Mezzeh trade is wrong and founded in 1998 is '
            + 'right and is better. Cheapest?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We are cheaper than the two I have checked.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then you are cheaper than the two you have checked, which is a '
            + 'sentence, and the cheapest in Damascus is a claim about about '
            + 'forty businesses you have never telephoned. Strike it out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And one of the most reliable?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ One of the most is the honest form and it is still a claim about '
            + 'everybody else. What can you prove about yourself alone?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nine hundred and forty deliveries last year, eleven late, and the '
            + 'eleven are in a list with the reasons.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then write that, and never the superlative. Nine hundred and '
            + 'forty deliveries, eleven late, list available. ⚠ It is checkable, '
            + 'it is about us, it needs nobody else to be worse, and a buyer in '
            + 'another country can forward it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is less impressive.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ It is more impressive to the only reader who matters, which is '
            + 'one who has been told she is dealing with the most reliable '
            + 'company in Syria by four other people this month. ⚠ A superlative '
            + 'is a claim about other people; a figure is a claim about you.' }
  ]
});

PBE6.scene('u16-16-2-pair', {
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
      en: 'The sign says the best prices and the best service in the district.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which can you prove on Thursday?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Neither. And every sign in the district says it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So the sign says nothing at all. What is true about us alone?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We hold a quoted price for fourteen days, in writing, with the date on it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Ninety-four of our two hundred and twelve accounts have been '
            + 'with us more than five years.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then that is the sign — two facts, no adjectives, and neither of '
            + 'them is on anybody else\'s.' }
  ]
});

PBE6.scene('u16-16-3', {
  set: 'quotetable',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'I asked Ms Shamsi for a price break. She has three steps: a '
            + 'hundred at a thousand, three hundred at 960, five hundred at 920.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So the more we take, the less it costs.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Eight per cent at the top step.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And we use four hundred a month. What would five hundred mean?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'A hundred cartons standing in the warehouse, and eighty paid out a '
            + 'month early.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Say the whole thing as one sentence, both halves.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ The more we take at one time, the less each carton costs — and '
            + 'the more of our money is standing in the fourth store doing '
            + 'nothing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Which is the honest form, and now the arithmetic. Eight per cent '
            + 'of five hundred cartons is 4,000 a month saved. What is the '
            + 'hundred surplus worth to us standing still?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'At our overdraft rate, about 2,200 a month. So we are 1,800 ahead.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And what is the space worth? The fourth store is full and the '
            + 'hundred cartons go in the corridor, where they were last August '
            + 'when the rain came in.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '…Then I cannot put a number on that.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then say so and take the middle step. Three hundred at 960 is '
            + 'four per cent, it is below our monthly usage, nothing stands still '
            + 'and nothing goes in the corridor. ⚠ The top step is eight per cent '
            + 'of a price and a cost in a place where we have already been '
            + 'damaged once.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So the biggest break is not the best break.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ The proportional sentence is true and it is not an instruction. '
            + 'The more we take, the less it costs says what the price does; ⚠ it '
            + 'says nothing about what the cartons do when they get here, and '
            + 'that is the half of the sentence the supplier does not write.' }
  ]
});

PBE6.scene('u16-16-3-pair', {
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
      en: 'They offer two per cent for payment in ten days instead of sixty.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the sooner we pay, the less it costs. And the other half?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ The sooner we pay, the less we have in the bank in the week the '
            + 'wages go out.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the arithmetic? Two per cent for fifty days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is about fourteen per cent a year, which is better than our overdraft.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then it is a good rate — and only if the fifty days were free. Are they?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…In three months of the year they are not, because of the wages '
            + 'week and the two tax dates.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ So take it in nine months and not in three, and say so in the letter.' }
  ]
});

PBE6.scene('u16-16-4', {
  set: 'quotetable',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The two carton quotations. The cartons are the same specification, '
            + '30 by 20, same board.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then the goods are identical and everything that is left is how '
            + 'they behave. May I?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Ms Shamsi delivers more reliably — she has been late twice in '
            + 'eleven years and she telephones the day before. The Homs supplier '
            + 'delivers faster when he delivers, because it is a shorter road.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Faster against more reliably.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Which are not the same thing and people trade them as though they '
            + 'were. ⚠ Faster matters when you are late. More reliably matters '
            + 'when you are planning. We plan.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Next?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'They pack more carefully than he does, which I know because I open '
            + 'them. Four of his sample cartons were marked and two of hers in '
            + 'eleven years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'She answers the telephone more quickly and she answers more '
            + 'honestly. When she cannot do something she says so on the '
            + 'telephone. ⚠ He said no problem to a question I asked to see '
            + 'whether he would say no problem, and the answer was that it was a '
            + 'problem.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which of the four decides it?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ The last one, and it is the one that never appears in a '
            + 'comparison table, because answers more honestly has no units. ⚠ '
            + 'But it is the only one of the four that tells you what the other '
            + 'three will be worth when something goes wrong — and something '
            + 'always goes wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I write that down?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Write the test, not the judgement. Asked a question he could not '
            + 'say yes to; he said no problem. ⚠ That is checkable, it is one '
            + 'line, and anybody can repeat the test with any supplier.' }
  ]
});

PBE6.scene('u16-16-4-pair', {
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
      en: 'How do I test honesty without insulting anybody?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Ask something they cannot say yes to, and make it ordinary. Can '
            + 'you do five hundred by Thursday? when Thursday is three days away '
            + 'and the road is four.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if he says no?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then he is useful, and you have found out in one telephone call '
            + 'that his dates mean something.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if he says no problem?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then you know what all his other dates are worth, and you have '
            + 'not accused anybody of anything. You asked a question and he '
            + 'answered it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It feels like a trap.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ It is a trap you will walk into on the real order instead, in '
            + 'March, with a customer behind you. This way it costs a telephone '
            + 'call.' }
  ]
});

PBE6.scene('u16-16-5', {
  set: 'quotetable',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Our conclusion is that Ms Shamsi is better.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Better at what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Better overall.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ There is no such dimension. Give me the sentence six times, once '
            + 'for each thing you compared.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On price, he is cheaper — eleven per cent ex-works. On landed '
            + 'cost, she is cheaper, by about four per cent. In terms of lead '
            + 'time, he is a day quicker. As regards reliability, she is better, '
            + 'and it is not close. On packing, she is better. ⚠ And on honesty — '
            + 'she is better, and that is the one we decided on.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Six dimensions, and the word better was doing all six at once. '
            + 'Which way did it point?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Her way, because I had already decided.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Which is what the word is for. Better is not a comparison, it is '
            + 'a conclusion with the working removed — and because two of the six '
            + 'go the other way, ⚠ anybody who reads your conclusion and then '
            + 'meets the Homs supplier will think you did not look.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I should name all six, including the two against.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'All six, in a fixed order, with the two against clearly on his '
            + 'side. ⚠ A recommendation in which everything favours the '
            + 'recommended option is not a recommendation; it is an '
            + 'advertisement, and an auditor reads it as one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if somebody asks which dimension matters most?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then you have been asked the real question and you must answer '
            + 'it in one sentence, and the answer is about you and not about '
            + 'them: reliability, because we plan a fortnight ahead and we cannot '
            + 'absorb a surprise. ⚠ Nobody can argue with a weighting that is '
            + 'stated. Everybody can argue with one that is hidden inside the '
            + 'word better.' }
  ]
});

PBE6.scene('u16-16-5-pair', {
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
      en: 'The second candidate is better.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better at what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Better overall.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ There is no such dimension. Name them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'On experience, the first — six years against two. On speed, the '
            + 'first. ⚠ On accuracy, the second, clearly. On asking when she is '
            + 'unsure, the second. On whether she will still be here in two '
            + 'years, I do not know for either.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So two go one way, two the other, and one is unknown. Which '
            + 'matters most, and why — about us?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ Accuracy, because the work goes to a buyer in another country '
            + 'who cannot telephone the warehouse to check it.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then say that, and the whole decision is one sentence that '
            + 'nobody can argue with.' }
  ]
});

PBE6.scene('u16-16-6', {
  set: 'quotetable',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I recommend we stay with Ms Shamsi and ask for the three-hundred '
            + 'price break.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Good sentence. Two more things and then I can sign it. What would change it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If she refused the break?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is one. What else?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ If the Homs supplier delivered. One delivery would turn his '
            + 'reliability column from a guess into a figure, and his column is '
            + 'the only one on the page that is a guess.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So write both. What would change this: Ms Shamsi refusing the '
            + 'break, or one clean delivery from Homs. And the third thing?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The date?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ When you will look again. A recommendation with no review date '
            + 'is a decision that lasts for ever by accident. ⚠ This company has '
            + 'suppliers nobody has compared since 2011, not because anybody '
            + 'decided to keep them but because nobody wrote a date.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say August.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Say August, and say what you will have by then that you do not have now.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Six months of Ms Shamsi at the new price, and if we put one '
            + 'small order through Homs, a real reliability figure instead of a '
            + 'guess.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then do that. One order of a hundred at the top of his price '
            + 'list, which costs us nothing in particular, and in August you will '
            + 'have two suppliers with figures instead of one supplier and a '
            + 'guess. ⚠ The column that is a guess stays a guess until somebody '
            + 'spends a little money on it — and a hundred cartons is a cheap way '
            + 'to buy a column.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the recommendation is three sentences.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ What you recommend, what would change it, and when you will look '
            + 'again — and the third is the one that stops a comparison becoming '
            + 'a tradition.' }
  ]
});

PBE6.scene('u16-16-6-pair', {
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
      en: 'I recommend we keep the old till and repair it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What would change it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If the repair cost more than about a third of a new one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is one. What else?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '⚠ If it failed twice more this year. Twice is a pattern and once '
            + 'is a Tuesday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when will you look again?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'June, when I shall have six months of fault records.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And which column is a guess?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ How long a new one would last. I have put eight years and I have '
            + 'no idea — the old one has done eleven and the shop two doors away '
            + 'has had two in five years.' }
  ]
});

PBE6.scene('u16-16-7', {
  set: 'quotetable',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The carton comparison. Six dimensions, landed cost, and a '
            + 'recommendation. Is there anything not in it?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Two things, and neither is a criticism. First: ⚠ his cartons come '
            + 'flat and hers come made up.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not in any quotation.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is not in any quotation and it is about forty minutes a day for '
            + 'one man. Four hundred cartons made up by hand is a morning a week. '
            + '⚠ Your landed cost has a van in it and does not have a man in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ His pallet is a different size. Ours take two of hers side by '
            + 'side in the racking and three of his leave a gap you cannot use. '
            + 'So the fourth store holds about eleven per cent less of his than '
            + 'of hers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is the space problem I could not put a number on, and you '
            + 'have just put a number on it.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Eleven per cent of the fourth store, and I know it because I stack '
            + 'it. ⚠ Nothing in your columns is lifted by anybody, and both of '
            + 'the things I have told you are things you find out by lifting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why has nobody ever told me either of these?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because nobody has ever shown me a comparison before. ⚠ They are '
            + 'decided in the office and arrive in the warehouse as an '
            + 'instruction, and by the time the first pallet comes the decision '
            + 'is eleven months old and the cartons are flat.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I had asked you in January?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Two minutes. I would have asked you two questions: made up or '
            + 'flat? and what size is the pallet? ⚠ They are the first two '
            + 'questions anybody who stacks would ask and they are on nobody\'s '
            + 'quotation sheet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are going on ours.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Then put a line at the bottom of the sheet saying who in the '
            + 'building has to be asked before it is signed, and put my name on '
            + 'it — not because my opinion matters more, ⚠ but because the '
            + 'columns are written by people who do not lift anything.' }
  ]
});

PBE6.scene('u16-16-7-pair', {
  set: 'quotetable',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Before you decide — how does it arrive?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In boxes of fifty.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Fifty of what weight?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I do not know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Because if it is over about twelve kilos it is two people to '
            + 'lift, and there are two of us on a Thursday morning and one of us '
            + 'is on the counter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not on either quotation.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ It is never on a quotation. A quotation describes what is being '
            + 'sold and not the work of receiving it — and the work of receiving '
            + 'it is mine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How long would it have taken you to tell me?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Less than a minute, any day in the last four months.' }
  ]
});

PBE6.scene('u16-16-7-b', {
  set: 'quotetable',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Two things, and neither is a criticism. First: his cartons come '
            + 'flat and hers come made up.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not in any quotation.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It is about forty minutes a day for one man. Four hundred cartons '
            + 'made up by hand is a morning a week. Your landed cost has a van in '
            + 'it and does not have a man in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'His pallet is a different size. Three of his leave a gap you '
            + 'cannot use, so the fourth store holds about eleven per cent less '
            + 'of his than of hers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I had asked you in January?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Two minutes. I would have asked you two questions: made up or '
            + 'flat, and what size is the pallet.' }
  ]
});
