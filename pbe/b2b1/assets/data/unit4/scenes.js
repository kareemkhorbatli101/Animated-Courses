/* Unit 4 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u4-4-1', {
  set: 'planning',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The first contract year will probably run to about eleven hundred a month.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Probably on what conditions?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On his figures.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then say so, because his figures are a condition and not a fact. '
            + '⚠ On current terms is three words and it is the difference between '
            + 'a forecast and a promise.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if it does not run to eleven hundred?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ With the condition in, you were right and the condition changed. '
            + '⚠ Without it, you were wrong, and the next thing you forecast is '
            + 'read by a man who remembers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what are the conditions on this one?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Three, and you know all of them. ⚠ His volume holds. The border is '
            + 'open. And the press runs three hours a night, which depends on the '
            + 'generator. Any one of those goes and your eleven hundred goes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then should I give a range instead of a number?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Give both, and understand what each is for. ⚠ The number is what '
            + 'you plan on. The range is what you survive. ⚠ Eight hundred to '
            + 'twelve hundred, and the paper has to work at eight hundred.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And all else equal?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That one is for when you cannot list the conditions, and it is '
            + 'weaker. Use it once a paper. ⚠ A man who writes all else equal '
            + 'three times is telling you he has not thought about what else '
            + 'there is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And on the evidence to date?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ That is the honest one and nobody uses it. ⚠ It says: this is '
            + 'what the file supports, and the file is eleven weeks old.' }
  ]
});

PBE7.scene('u4-4-1-pair', {
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
      en: 'Eleven hundred a month, in a range of eight hundred to twelve hundred.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Does the plan work at eight hundred?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It should do.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do the arithmetic.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Eight hundred at his price is about two thirds of the revenue. '
            + 'The mill order is fixed for the year. The second press is on '
            + 'nights either way.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So at eight hundred we have paid for capacity we are not using, '
            + 'and the margin is about four points thinner. It still pays.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And at six hundred?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six hundred is outside the range.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then say what the range is for, in the note, because at the moment '
            + 'the reader has to guess whether six hundred is unlikely or '
            + 'unsurvivable.' }
  ]
});

PBE7.scene('u4-4-2', {
  set: 'planning',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Paragraph 13: the arrangement would create a significant '
            + 'concentration of revenue in a single counterparty.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Everybody will agree with that and nobody will remember it on Thursday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is accurate.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is accurate and it is unreadable, because it is about a '
            + 'concept. ⚠ Make it a Tuesday. What actually happens on a bad '
            + 'Tuesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If his payment is late, we cannot pay the mill.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then write that. ⚠ Sixty-one per cent of what we sell would be '
            + 'bought by one man in Beirut, and if his payment is four weeks late '
            + 'we cannot pay Mr Attar\'s mill on the twenty-eighth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is two facts in one sentence.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is a figure and a Tuesday, and the Tuesday is what makes the '
            + 'figure arrive. Sixty-one per cent is an argument; not paying the '
            + 'mill is a morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the word you want out?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Significant. ⚠ It is doing nothing except telling the reader you '
            + 'think the number is big, which he can see. You wrote four '
            + 'paragraphs in Unit 3 about not arguing with adjectives.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I also wrote counterparty.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Which is a correct word and it is a screen. ⚠ One man in Beirut '
            + 'whom nobody here has met. Same fact, and now there is a person in '
            + 'it, and a person can be late.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Attar will say counterparty is the proper term.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Mr Attar will say it once and then he will say and if he is late '
            + 'we cannot pay the mill, because that is the sentence he will '
            + 'remember.' }
  ]
});

PBE7.scene('u4-4-2-pair', {
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
      en: 'There is a concentration of pricing capability in a limited number '
            + 'of personnel.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is four people.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Name them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Ayoub, Bassel, Hala and me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And where did three of you learn it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…From Mr Ayoub.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So say that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four people here can price an export order and three of them '
            + 'learned it from the fourth.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now there is a man in it, and a man can be in Homs for a '
            + 'fortnight. What did the first version let a reader do?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Agree with it. There is nothing in it to disagree with.' }
  ]
});

PBE7.scene('u4-4-3', {
  set: 'planning',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The damages exposure is about four hundred thousand.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ On what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On a two-week delay at eleven hundred cartons a month, at the rate '
            + 'in his clause.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then number it. ⚠ Four assumptions, and a reader can attack any '
            + 'of them, and you tell him which one you would attack.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One: the clause rate, which is in his letter. Two: that a delay of '
            + 'two weeks is the realistic bad case. Three: eleven hundred a '
            + 'month. Four: that the clause runs from dispatch and not from '
            + 'arrival.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Which is weak?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Two. The two weeks is from last year — we were two weeks late '
            + 'twice, both in the Homs season.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ And is Beirut like Homs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…No. Homs was a seasonal allocation problem and this is a border '
            + 'and a press. ⚠ I have used last year\'s delays because they are '
            + 'the only delays I have.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then write that sentence into the note, exactly as you said it. '
            + '⚠ I have used last year\'s delays because they are the only delays '
            + 'I have. That is worth more than the four hundred thousand.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Because the four hundred thousand is a number and the sentence '
            + 'is its warranty. ⚠ A figure with its weakest assumption named is a '
            + 'figure a reader can use. A figure with four hidden assumptions is '
            + 'a figure he either believes or ignores, and he will ignore it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the fourth assumption?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ The fourth is not an assumption, it is a question for Mr Sayegh, '
            + 'and you should take it out of the model and put it in a line of '
            + 'its own. ⚠ Do not model a legal question. Ask it.' }
  ]
});

PBE7.scene('u4-4-3-pair', {
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
      en: 'We assume a seventy per cent chance the clause runs from dispatch.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who could answer that definitively?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Sayegh.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How long would it take him?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He would read the clause. A morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what is the difference between the two readings worth?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine days of transit at eleven hundred a month. About a hundred '
            + 'and thirty thousand.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you have put a seventy per cent on a hundred and thirty '
            + 'thousand rather than spend a morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Put like that, no.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Take it out of the model, put it in a line of its own, and say you '
            + 'have asked him. The note is better and it is shorter.' }
  ]
});

PBE7.scene('u4-4-4', {
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
      en: 'You have put a figure on three risks and a dash on the fourth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The fourth is Ms Tannous. I cannot price it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Could you? If I told you to.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…I could write something. I could take her four years of orders '
            + 'and call it that.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ And what would happen to that number?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It would go in the note.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It would go in the note, and then into somebody\'s summary of '
            + 'the note, and then into a sentence in a meeting in September that '
            + 'begins the Tannous exposure is about — ⚠ and by then nobody will '
            + 'know you made it up in an afternoon in March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Write what would happen. Not a number. The sequence. ⚠ She loses '
            + 'the Beirut chain. She has two other Syrian suppliers and she will '
            + 'tell them why. And the next time somebody in Beirut wants cartons '
            + 'from Damascus, she is the person they ask.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the part I had not written.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because it has no number in it, and you have spent three weeks '
            + 'learning to put numbers on things. ⚠ A risk you cannot price is '
            + 'not a smaller risk. It is a risk in a different language.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the sentence itself?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ This is real and I am not going to invent a figure for it. ⚠ '
            + 'Then the sequence, and then stop. Do not defend it for a paragraph '
            + '— a refusal defended at length reads like a figure you could not '
            + 'find.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Will Mr Attar accept that?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Mr Attar will accept it before he accepts an invented hundred '
            + 'and fifty thousand, and so will I, and I will tell you something '
            + 'you do not know. ⚠ She took the first order at a price that lost '
            + 'her money. I knew at the time and she knew I knew, and neither of '
            + 'us ever said it.' }
  ]
});

PBE7.scene('u4-4-4-pair', {
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
      en: 'I am not going to put a figure on it. Of course it is inherently '
            + 'difficult to quantify these things, and any number would be '
            + 'arbitrary, and one has to be careful about false precision, and I '
            + 'am conscious that this is unsatisfactory.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What do I now believe about you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That I tried to find a number.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And could not.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is the opposite of what you meant. Say it in one sentence '
            + 'and go straight on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'This is real and I am not going to invent a figure for it. What '
            + 'follows is what would happen, in order.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now what do I believe?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That I decided not to.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And that you could have. Which is true, and it is the only version '
            + 'that is a position.' }
  ]
});

PBE7.scene('u4-4-5', {
  set: 'planning',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your four exposures are each survivable. Now put two of them in '
            + 'the same fortnight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which two?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ You choose, and then I will tell you which two I would have chosen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The generator and the border.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Good. Why those?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because the generator fails in the heat and the border closes in '
            + 'the summer, and August is both.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Which is correlation, and it is the word your note does not use '
            + 'anywhere. ⚠ Two risks that share a cause are not two risks, they '
            + 'are one risk that arrives twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what happens on the worst of both?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ You tell me. Do the arithmetic out loud.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The generator goes, so no night shift, so four hundred a month '
            + 'instead of eleven hundred. And the border is shut, so what we have '
            + 'made does not ship, so no payment. ⚠ And the damages clause runs '
            + 'anyway, because his clause does not care why we are late.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Say the last part again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The clause does not care why.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is the sentence this whole note has been walking towards '
            + 'and it is not in it. ⚠ Four hundred thousand of damages in the one '
            + 'fortnight when we have no income to pay it out of. And the two I '
            + 'would have chosen were those two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I put all the pairs in?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ No. One pair, worked properly, and say why that pair and not the '
            + 'others. ⚠ A note with six pairs in it is a note nobody finishes, '
            + 'and the six will all be less frightening than the one.' }
  ]
});

PBE7.scene('u4-4-5-pair', {
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
      en: 'Put two of them in the same fortnight.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The generator and the border.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why those?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The generator fails in the heat and the border closes in the '
            + 'summer, and August is both.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is correlation. Now the arithmetic, out loud.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The generator goes, so no night shift, so four hundred a month '
            + 'instead of eleven hundred. The border is shut, so what we have '
            + 'made does not ship, so no payment.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…And the damages clause runs anyway, because his clause does not '
            + 'care why we are late.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say the last part again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The clause does not care why.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is the sentence the whole note has been walking towards, and '
            + 'it is not in it.' }
  ]
});

PBE7.scene('u4-4-6', {
  set: 'planning',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Four parts and a stress case. It is the best thing you have '
            + 'written and one risk is not in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What kind of company this becomes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not a risk, it is a question of direction.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is a risk and it is the largest one, and you have written '
            + 'four parts about the others because they have figures or sequences '
            + 'and this one has neither. ⚠ A company with one customer is a '
            + 'different company. It prices differently, it argues differently, '
            + 'and it cannot say no.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I cannot write that. It is above me.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You cannot decide it. Writing it is not deciding it. ⚠ And if '
            + 'you leave it out, the note says the risks are a generator, a '
            + 'border, a clause and a woman in Beirut — which is a list of '
            + 'operational problems, and he will read it as a list of operational '
            + 'problems and solve them one at a time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So how do I write something I am not entitled to an opinion about?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You do not give an opinion. You hand it over, in one line, and '
            + 'you say it is the only one in the note you are handing over. ⚠ '
            + 'This one is yours. It is whether this company is the kind of '
            + 'company that has one customer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And no recommendation?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ None. ⚠ A recommendation on that question from the office '
            + 'manager is the sentence Mr Attar would quote for ten years. And it '
            + 'would be the only thing in four parts that nobody could check.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It feels like stopping halfway.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ It is stopping exactly where your authority stops, in writing, '
            + 'where everybody can see it. ⚠ Which is the opposite of stopping '
            + 'halfway — it is the only part of the note that tells him what the '
            + 'note is not.' }
  ]
});

PBE7.scene('u4-4-6-pair', {
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
      en: 'This one is yours. It is whether this workshop takes wide '
            + 'architectural work at all. And in my view we should stop.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who would quote that last sentence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Mr Attar.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To whom?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'To anybody. And to the bank, probably, in a year when we are '
            + 'arguing about the lease.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For how long?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And is it checkable?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is the only thing in nine pages that is not.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then take it out and say the silence is deliberate, because '
            + 'otherwise he will think you forgot to say what you thought.' }
  ]
});

PBE7.scene('u4-4-7', {
  set: 'planning',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I want to read you the stress case before it goes. The generator '
            + 'and the border, in the same fortnight.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Read it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The generator fails in the heat. The border closes in the summer. '
            + 'August is both.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ August is three things.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The water. Three weeks in August the pressure drops and the hose '
            + 'at the gate will not fill the tank, and the press cannot run '
            + 'without water for the glue. ⚠ Four years out of five. We carry it '
            + 'in drums from the second store.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is not in any document.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ No. We carry drums. ⚠ Me and whoever is on. It takes about forty '
            + 'minutes a night.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'For four years.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Five. ⚠ Nobody has ever asked me about August. I have been asked '
            + 'about the generator, because the generator is a thing you buy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So at eleven hundred a month, with drums?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ You cannot do eleven hundred on drums. Four hundred, yes. We '
            + 'have. ⚠ Eleven hundred is a tank and a pump and somebody whose job '
            + 'it is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whose exposure is that?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Nobody\'s, and that is why you have not got it. ⚠ It is not the '
            + 'generator man\'s and not the office\'s and not mine, because I '
            + 'have been solving it every August and a thing that gets solved '
            + 'stops being a problem anybody writes down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is how it stayed out of a twenty-one-page note about risk.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ It stayed out because it has never once stopped the press. ⚠ I '
            + 'have made sure of that for five years, and now I am the reason '
            + 'nobody knows.' }
  ]
});

PBE7.scene('u4-4-7-pair', {
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
      en: 'Is August all right?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'August is fine. It always is.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing goes wrong?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nothing has gone wrong in six years.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…What happens in August?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The compressor loses pressure in the heat and somebody tops it up '
            + 'by hand every morning.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Every morning?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'About twenty minutes. Whoever is in first.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if we were running twice the volume?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You could not do it by hand. You would need a second compressor, '
            + 'or a man on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why has nobody written that down?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Because it has never stopped anything.' }
  ]
});

PBE7.scene('u4-4-7-b', {
  set: 'planning',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.69, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The stress case says the generator and the border. ⚠ August is both.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ August is three things.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ The water. Three weeks in August the pressure drops and the hose '
            + 'at the gate will not fill the tank, and the press cannot run '
            + 'without water for the glue. ⚠ Four years out of five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do you do?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ We carry it in drums from the second store. Me and whoever is '
            + 'on. ⚠ About forty minutes a night.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'For how long?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ Five years. ⚠ Nobody has ever asked me about August. I have been '
            + 'asked about the generator, because a generator is a thing you buy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And at eleven hundred a month?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: '⚠ You cannot do eleven hundred on drums. Four hundred, yes — we '
            + 'have. ⚠ Eleven hundred is a tank and a pump and somebody whose job '
            + 'it is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whose exposure is this?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: '⚠ Nobody\'s, and that is why you have not got it. ⚠ It has never '
            + 'once stopped the press. I have made sure of that for five years, ⚠ '
            + 'and now I am the reason nobody knows.' }
  ]
});
