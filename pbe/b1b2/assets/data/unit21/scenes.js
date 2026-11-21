/* Unit 21 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u21-21-1', {
  set: 'dealtable',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Seven per cent and ninety days. Which one does she care about?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I do not know. She asked for both in the same sentence.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then you are negotiating against a sentence and not against a '
            + 'person. What do you know about her year?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She sells to one customer, mostly. He takes about eight hundred '
            + 'cartons a year and he orders at short notice.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So ask her what she will tell him. Not what she wants from us — '
            + '⚠ what she has to be able to say to him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I telephoned her. She said: I need to be able to tell him a date '
            + 'in the month and be right.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the seven per cent?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ She said and obviously the price matters, and then she went back '
            + 'to the dates for four minutes. ⚠ She spent four minutes on the '
            + 'dates and nine words on the price.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then the price is her position and the date is her interest. ⚠ A '
            + 'position is what somebody asks for; an interest is what they are '
            + 'trying to do. And you can sometimes give a man what he needs '
            + 'without giving him what he asked for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is the discount not real?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is perfectly real and she will take it if we give it. ⚠ But '
            + 'it is not what she is frightened of. She is frightened of telling '
            + 'her customer the twelfth and it arriving on the twenty-first, ⚠ '
            + 'which happened to her once, with us, in January.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the nine cartons are in this letter.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Everything that has gone wrong between two companies is in the '
            + 'next thing they ask each other for, and it is usually not '
            + 'mentioned. The seven per cent is January, written as a number.' }
  ]
});

PBE6.scene('u21-21-1-pair', {
  set: 'dealtable',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'How long did he talk about the price?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He opened with it. Perhaps thirty seconds.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the other thing?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The invoice format. ⚠ Eleven minutes, and he came back to it twice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ So which did you prepare an answer for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The price.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then you prepared for thirty seconds of the meeting. ⚠ The thing '
            + 'asked for first is usually the position, because it is the thing '
            + 'somebody rehearsed before they telephoned.' }
  ]
});

PBE6.scene('u21-21-2', {
  set: 'dealtable',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I cannot give seven per cent. The margin on an export carton is '
            + 'about eleven.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Can you give anything at all?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I can hold the present price for twelve months, which is worth '
            + 'something in a year when everything moves.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And what makes that possible?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Knowing roughly what the quantity is. ⚠ If she takes eight hundred '
            + 'cartons I can hold the price; if she takes forty I cannot, because '
            + 'the board setup is the cost.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then that is the sentence. We can hold the present price for '
            + 'twelve months, provided that the quantity for each quarter is '
            + 'confirmed in writing four weeks before it starts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if she will not confirm quantities?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the answer is still yes — to something smaller. Provided '
            + 'that is not a refusal with a condition on it; ⚠ it is the shape of '
            + 'every yes that a company can actually keep.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would rather say we hope to be able to hold the price.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you have said nothing and she will plan against it. ⚠ A '
            + 'condition is a thing somebody can do; a hope is a thing somebody '
            + 'can only wait for — and in four months she will say we promised '
            + 'and we will say we hoped, and both of us will be right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the condition protects her as well.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ It tells her exactly what to do to be certain, which is the only '
            + 'kind of certainty anybody can give. ⚠ And it has to be a thing she '
            + 'can do by herself. Provided that trade is normal is not a '
            + 'condition; it is a hope with grammar round it.' }
  ]
});

PBE6.scene('u21-21-2-pair', {
  set: 'dealtable',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We hope to be able to hold the price.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Could she make that true this afternoon?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It depends on the board price.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then it is a hope. What could she do this afternoon that would '
            + 'make it true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Tell us the quarter\'s quantity.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then: we can hold the price provided that the quarter is '
            + 'confirmed in writing four weeks before it starts.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if she will not?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then yes, to something smaller: one quarter at a time, at the same price.' }
  ]
});

PBE6.scene('u21-21-3', {
  set: 'dealtable',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Last March you gave Mr Tarabishi two per cent. What did we get for it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing. ⚠ He had been difficult about the delivery and I wanted '
            + 'the conversation to end.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And what is his price now?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Two per cent below the list, and he has never paid the list '
            + 'since. ⚠ It was a gesture for one order and it is now the price.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Every concession you give becomes the floor. Nobody goes back '
            + 'up. ⚠ So the question before you give anything is not can we '
            + 'afford it? but what is it buying?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the answer is nothing?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then do not give it; ask for something with it. ⚠ I would be '
            + 'prepared to look at three per cent, if you would take the quarter '
            + 'in one consignment instead of three. Three deliveries into one is '
            + 'most of the three per cent back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if she says no to the consignment?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then the three per cent was never offered. That is the whole '
            + 'value of the shape: ⚠ the offer and the ask are one sentence, so a '
            + 'refusal of one is a refusal of both — and nothing has been left on '
            + 'the table.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds like a trick.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is the opposite of a trick. A concession with nothing '
            + 'attached looks generous for about a week and then becomes the '
            + 'baseline, ⚠ and the next time she asks, you have nothing left to '
            + 'move — which is how a supplier ends up at cost, one kind gesture '
            + 'at a time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I ask for with the three per cent?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Ask for the thing that pays for it. One consignment instead of '
            + 'three, or payment at thirty days instead of sixty, or the quantity '
            + 'in writing. ⚠ Never ask for goodwill; ask for something that '
            + 'appears in the arithmetic.' }
  ]
});

PBE6.scene('u21-21-3-pair', {
  set: 'dealtable',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I will give them the free delivery. It is only a van.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ What is it buying?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Goodwill. They have been patient.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Goodwill does not appear in the arithmetic. What costs them '
            + 'nothing and is worth something to us?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Taking it on our eastern day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then: I would be prepared to deliver free, if you would take it '
            + 'on our eastern day.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if they say no?' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then the free delivery was never offered, and nothing is on the table.' }
  ]
});

PBE6.scene('u21-21-4', {
  set: 'dealtable',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'She has come down from ninety days to sixty.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And what did you say?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I said thank you, and that I would put it to Mr Ayoub.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the negotiation has stopped and she does not know why. ⚠ A '
            + 'move that is received in silence is a move that was free, and she '
            + 'will not make another one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I did not want to answer before I had asked.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ You do not have to answer. You have to say what it changes. ⚠ In '
            + 'that case I can look at the price for the first quarter, or in '
            + 'that case the evening number becomes easier, or even in that case '
            + 'I will have an answer by Thursday instead of next week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The last one gives nothing at all.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ It gives her a date, which is the thing she actually wants, and '
            + 'it tells her the move was noticed. ⚠ Both halves of a negotiation '
            + 'are made of noticing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the move is small?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then in that case is small too, and that is honest. You have '
            + 'come down thirty days; ⚠ in that case I can take the setting-up '
            + 'charge off the first consignment, which is about a quarter of what '
            + 'you asked for. ⚠ Say the proportion out loud — it stops both sides '
            + 'pretending.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I have nothing to give?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then say what it changes about the process. In that case I can '
            + 'put this to Mr Ayoub tomorrow rather than next week, and I will '
            + 'telephone you either way on Thursday. ⚠ A negotiation where '
            + 'nothing moves still has dates in it, and a date is a real answer.' }
  ]
});

PBE6.scene('u21-21-4-pair', {
  set: 'dealtable',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'They have dropped one of their two requests.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Answer it three ways. One that costs money.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In that case I can look at the delivery charge.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ One that costs nothing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In that case I can put the whole thing to the owner as one request '
            + 'rather than two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And one with only a date.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In that case you will have an answer on Thursday, either way.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ And in most real cases you will use the second or the third.' }
  ]
});

PBE6.scene('u21-21-5', {
  set: 'dealtable',
  arr: 1,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Before you go back to her, what will you not trade?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The price, below about four.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is a number and a number can always be traded; it is just a '
            + 'question of how much. ⚠ A non-negotiable is not a number. It is a '
            + 'thing that stops being this company if you give it away.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: paid before the lorry leaves the yard.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ On the first consignment of each quarter, yes. And why?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because the fuel for the generator is cash, every week, and the '
            + 'men are paid on Thursdays. If a quarter goes unpaid we stop in '
            + 'eleven days.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then say it once, say why, and say it before she asks. Whatever '
            + 'else we agree, the first consignment of each quarter is paid '
            + 'before it leaves the yard. ⚠ That is not a position; it is the '
            + 'week\'s wages.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is it not weak to explain it?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ An unexplained refusal is tested; an explained one is planned '
            + 'around. ⚠ She will test we cannot do that three times and she will '
            + 'not test the men\'s wages once — and if she can plan round it, she '
            + 'will, because she wants the arrangement too.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How many of these may I have?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ One. ⚠ A man with four non-negotiables has none, because the '
            + 'other side simply picks the softest and tests that, and then all '
            + 'four are in play. ⚠ One line, said once, and everything else is a '
            + 'trade.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if she refuses it outright?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then there is no arrangement, and we say so without any temper — '
            + 'and we keep selling her cartons one order at a time, as we did in '
            + 'January. ⚠ A walk-away that costs nothing to say is the only '
            + 'reason anybody believes the line at all.' }
  ]
});

PBE6.scene('u21-21-5-pair', {
  set: 'dealtable',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What will you not trade?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Our margin below eleven, thirty days, the name on the box, and the '
            + 'Friday closing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Which of those is a number?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The margin and the thirty days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then they are trades. Of the other two, which one stops being '
            + 'your company if you give it away?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The Friday closing. The name is pride.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then there is one line and it is the Friday, and now say why, in '
            + 'money or in hours.' }
  ]
});

PBE6.scene('u21-21-6', {
  set: 'dealtable',
  arr: 2,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I read the page? ⚠ You have two columns and they both say ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The left one is hers.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ It is what we think she should want. A fair price. A reasonable '
            + 'arrangement. A reliable supplier. ⚠ Those are our words.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What should be in it?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ What she said, in her words, with the minutes beside it. A date '
            + 'in the month I can be right about — four minutes. Obviously the '
            + 'price matters — nine words.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the rest of her column?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Her walk-away, which is the box you have left empty. ⚠ What does '
            + 'she do if we say no to everything?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…She buys in Lebanon. There are two companies in Beirut that make '
            + 'an export carton.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ At what price, and how long is the lead time?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dearer, I think. And I do not know the lead time.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ Then that is the most important blank on the page and it is the '
            + 'one we have not even guessed at. ⚠ A negotiation page with their '
            + 'walk-away empty is a page about ourselves.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I cannot find out?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Write unknown in capital letters, so that nobody in the meeting '
            + 'pretends to know. ⚠ Half of what people concede, they concede to a '
            + 'walk-away they have imagined — and in January we were frightened '
            + 'of Beirut for six weeks and she never once mentioned it.' }
  ]
});

PBE6.scene('u21-21-6-pair', {
  set: 'dealtable',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Their walk-away is that they buy from Aleppo. Dearer and slower.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ How much dearer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And how much slower?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know that either.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Then write UNKNOWN twice, in capitals. ⚠ And is there a '
            + 'condition inside it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Yes. Their own customer specifies our board weight, so Aleppo may '
            + 'not be allowed at all.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then that is the most important line on the page and you have '
            + 'just said it out loud for the first time.' }
  ]
});

PBE6.scene('u21-21-7', {
  set: 'dealtable',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'May I ask about the agreed terms? ⚠ There are five lines and the '
            + 'thing that settled it is not one of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'The five lines are the price held twelve months, four per cent on '
            + 'the first quarter, the quarters confirmed in writing, sixty days, '
            + 'and the first consignment of each quarter paid before it leaves. ⚠ '
            + 'Every one of those is something one of us gave up.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is what an agreement is.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ And the thing that ended the argument was the date list, which '
            + 'is not in it anywhere. She stopped asking about the discount the '
            + 'afternoon you sent her the dates for three months. ⚠ It cost '
            + 'nothing, so nobody wrote it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is in a letter.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ It is in a letter of mine to her, which is in a file, and in two '
            + 'years nobody will know it was the reason for any of this. ⚠ They '
            + 'will have the five expensive lines and none of the cheap one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does that matter, if the dates keep being sent?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ They will keep being sent while you are here. ⚠ And both of you '
            + 'think you gave more than you got — she says she came down from '
            + 'seven to four and from ninety to sixty, and you say you held a '
            + 'price for a year and took the setting-up charge off.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We both did give more than we got.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: '⚠ You both gave up the things the other one did not want. ⚠ She '
            + 'did not want seven per cent; she wanted to be right in front of '
            + 'her customer. You did not want sixty days; you wanted the quarter '
            + 'paid at the start. ⚠ So each of you paid in a currency the other '
            + 'one does not spend.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And what do I do about it?' },
    { who: 'lina', cam: { shot: 'close' },
      en: '⚠ Put the date list in the agreed terms, as a line, with no price '
            + 'next to it — the date list for the following three months reaches '
            + 'her by the 20th of each month. ⚠ It is the only line in the '
            + 'document that anybody will thank us for, and it is the only one '
            + 'that is currently nowhere.' }
  ]
});

PBE6.scene('u21-21-7-pair', {
  set: 'dealtable',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What is written in your agreement?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The rate, the hours, the notice period and who provides the tools.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And what was the last thing that changed before they said yes?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…They asked whether they could be paid on the Thursday rather than '
            + 'the last Friday of the month.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And you said?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. It makes no difference to us at all.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Is the Thursday in the agreement?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ No. It is the only thing in the whole negotiation that cost '
            + 'nothing, and it is the only thing that is nowhere.' }
  ]
});

PBE6.scene('u21-21-7-b', {
  set: 'dealtable',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.25, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'There are five lines in the agreed terms and the thing that '
            + 'settled it is not one of them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The five are the price held twelve months, four per cent on the '
            + 'first quarter, the quarters confirmed in writing, sixty days, and '
            + 'the first consignment paid before it leaves.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Every one of those is something one of you gave up. And the thing '
            + 'that ended the argument was the date list, which is in a letter in '
            + 'a file and in no line of the document. It cost nothing, so nobody '
            + 'wrote it down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does that matter, if the dates keep being sent?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'They will keep being sent while you are here. And both of you '
            + 'think you gave more than you got.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We both did.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'You both gave up the things the other one did not want. She did '
            + 'not want seven per cent; she wanted to be right in front of her '
            + 'customer. You did not want sixty days; you wanted the quarter paid '
            + 'at the start. Each of you paid in a currency the other one does '
            + 'not spend.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I do?' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'Put the date list in as a sixth line, with no price next to it.' }
  ]
});
