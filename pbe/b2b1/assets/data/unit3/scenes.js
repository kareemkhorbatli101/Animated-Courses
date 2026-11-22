/* Unit 3 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u3-3-1', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I did concede things. Page one, paragraph two: of course there are '
            + 'advantages, but.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Read the sentence again and stop at the comma.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of course there are advantages —' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What did that cost you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Nothing. It is a shape, not a statement.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And every reader in the world knows the shape. ⚠ A concession '
            + 'that costs you nothing is a warning: it tells the reader the real '
            + 'argument starts after the comma, and he begins reading for it '
            + 'instead of reading what you wrote.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what would cost me something?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Say the best thing about his case and then do not say but. ⚠ Put '
            + 'a full stop there and leave it standing for a sentence. The '
            + 'revenue case is better than anything we have been offered in ten '
            + 'years. Full stop.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is terrifying to write.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is, and that is how you know it is a concession. ⚠ The test '
            + 'is whether you are visibly poorer for having written it — whether '
            + 'a reader who stopped there would think you had lost.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then what?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then one more sentence that costs you. And I have nothing to set '
            + 'against it. ⚠ Because you do not. There is no counter-figure in '
            + 'your four pages, and pretending there is was the weakest thing in '
            + 'them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If I concede the revenue case, what is left of my paper?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ One figure and one request. ⚠ Which is a paper, and four pages '
            + 'of eleven arguments was not.' }
  ]
});

PBE7.scene('u3-3-1-pair', {
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
      en: 'The volume figures are not directly comparable with our current '
            + 'arrangements.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where did that come from?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is… the seasons are different, and the price basis.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you work it out?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I compared them. They are four times ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So they are directly comparable.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what is the clause doing in your paper?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Getting the strongest thing in his case out of the way.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does the paper look like without it?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Shorter. And it has to concede the volume in the second sentence, '
            + 'which is what I was avoiding.' }
  ]
});

PBE7.scene('u3-3-2', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'In August I wrote that I had never written a paper against a '
            + 'decision my employer had half-taken.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And now you have written two, and the first one came back with '
            + 'three words on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I want to put I may be wrong in this one. It feels like the honest thing.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is the honest thing and it is usually written as a weakness. '
            + 'Say it to me as you would write it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I may of course be wrong about this, as I have been before.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ That invites a reader to agree with you and stop. ⚠ You have '
            + 'offered him a free way out of your argument and he will take it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So how do I write it?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Attach a consequence. ⚠ I may be wrong about the sixty-one per '
            + 'cent. If I am, nothing else in this paper matters. Now the '
            + 'admission is load-bearing: it is holding the whole paper up, and '
            + 'he cannot agree with it cheaply.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the same information.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ It is the same information doing the opposite work. The first '
            + 'version says do not take me too seriously. The second says take '
            + 'this one figure seriously, because everything stands on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the figure is wrong?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then he finds out in February from one sentence instead of in '
            + 'June from a bank. ⚠ And he knows you told him where to push.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody ever tells anybody where to push.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Which is why it works. ⚠ A man who has been shown the weak point '
            + 'of an argument reads the rest of it as something built rather than '
            + 'something sold.' }
  ]
});

PBE7.scene('u3-3-2-pair', {
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
      en: 'I may of course be wrong about all this, as I have been before.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You may well be, and I think you are. Shall we leave it there?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is what the sentence buys you. What exactly might be wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The hundred and twenty on a Friday morning. It is Lina\'s estimate '
            + 'and she has been at the counter three weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if it is wrong, what happens to the rest?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If it is half that, there is no case at all. Everything else in '
            + 'the note is about how to open, not whether.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then write that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I may be wrong about the hundred and twenty. If it is half that, '
            + 'nothing else in this note matters.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when would I otherwise have found out?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'On the first Friday, with four staff in and a street that closes at one.' }
  ]
});

PBE7.scene('u3-3-3', {
  set: 'boardroom',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Your paragraph 5 says the arguments advanced in favour of the proposal.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are his arguments. I am reporting them.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ You are reporting them badly, and he will notice. ⚠ Then he will '
            + 'spend your whole paper correcting your version of his case instead '
            + 'of reading your version of the facts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I put it well.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Put it better than he put it. He said it in a yard in one '
            + 'sentence. You have four pages and a ledger. ⚠ Write the case he '
            + 'would write if he had your figures.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I did that. On Tuesday. It took two hours and I did not like it.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because it is better than I thought. Board at a price we have '
            + 'never been offered, because eleven hundred a month is a different '
            + 'conversation with the mill. The second press on nights all year '
            + 'instead of five months. And no more pricing every order against a '
            + 'season.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ And did your own case survive it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes. But it is a different case now. ⚠ It is not that the contract '
            + 'is bad. It is that sixty-one per cent is too much of us for one '
            + 'man to hold.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Which is the paper. You found it by writing his side properly, '
            + 'and you would not have found it any other way.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the risk?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ The risk is real and you should know it: you may convince '
            + 'yourself. ⚠ If his case is better than yours, writing it properly '
            + 'is how you discover that, and then you have to say so. That is the '
            + 'price of the method and there is no way round it.' }
  ]
});

PBE7.scene('u3-3-3-pair', {
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
      en: 'Read me their best case.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That two revisions of the price list in one month would confuse '
            + 'the nine trade customers who read it, and that the second revision '
            + 'is three weeks away anyway, and that reissuing now means reissuing '
            + 'twice.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you like writing it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is right.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And did your own case survive?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. The list should wait three weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then what is still true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That eleven quotations are out at the old price and they are live '
            + 'for fourteen days. That is not about the list at all.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you have a much smaller paper.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'One page, about eleven quotations, and it has nothing to do with '
            + 'the thing I was arguing about on Monday.' }
  ]
});

PBE7.scene('u3-3-4', {
  set: 'boardroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Sixty-one per cent. That is the figure the paper rests on.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Per cent of what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of turnover.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Whose turnover, over what period, and at which prices? ⚠ A '
            + 'percentage without its base is a feeling with a number stuck to '
            + 'it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of our total turnover for the twelve months to 31 December, with '
            + 'Mr Dallal\'s volume at his price added and nothing else changed.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Now it is a figure. And where does each half come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours from the ledger. His from his own letter of 9 January, page two.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Good — and say that, because half of it being his is the '
            + 'strongest thing about it. ⚠ A figure he gave you cannot be argued '
            + 'with by him. What three things does a figure need?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The number, the base, and the source.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ And one more, which nobody does: what it would have to be for '
            + 'the paper to fail.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Meaning?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ At what percentage would you stop worrying? If the answer is '
            + 'forty, say so. ⚠ Then your reader is not arguing about whether '
            + 'sixty-one is a lot. He is arguing about a line, and lines can be '
            + 'agreed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I had not thought of putting that in.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Nobody does, and it is the difference between a paper that '
            + 'starts an argument and a paper that ends one. ⚠ A number with no '
            + 'threshold beside it can be called high by you and moderate by him '
            + 'for ever.' }
  ]
});

PBE7.scene('u3-3-4-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'At what number would you stop minding?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Take your time.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I do not know. I have never thought about it as a number.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you call sixty-one high.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And Mr Ayoub calls it manageable, and neither of you can be shown '
            + 'to be wrong, and you will both say it again next week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How do I find my line?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Look for the figure you have already lived with. What have you run '
            + 'at without writing a paper?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thirty-eight. To Ms Tannous. For a year, and it never once worried me.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then your line is somewhere above thirty-eight, and you can defend '
            + 'forty because you have lived at thirty-eight.' }
  ]
});

PBE7.scene('u3-3-5', {
  set: 'boardroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'read', hold: 'book' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The paper recommends declining the contract in its present form.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What would he have to do to agree with you?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Write to Mr Dallal and say no.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And what else? ⚠ He stood in the yard in January and told four '
            + 'people this was the best thing in ten years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…He would have to be seen to change his mind.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ You have attached a cost to agreeing with you that has nothing '
            + 'to do with the argument, and it is a cost he pays and you do not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I cannot write the paper so that he was never wrong.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ No. You can write it so that agreeing with you is not the same '
            + 'act as being wrong. ⚠ What is the smallest thing that would answer '
            + 'your sixty-one per cent?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A cap. Six hundred a month in the first year instead of eleven '
            + 'hundred, and ask the mill what board costs at that volume before '
            + 'we commit to more.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And is that a yes or a no to Mr Dallal?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is a yes with a number in it. He keeps the contract, he keeps '
            + 'the three years, and the concentration goes to about thirty-five '
            + 'per cent.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ So write I am not asking you to refuse it in the first four '
            + 'lines. ⚠ And mean it — because if you do write that and he caps '
            + 'it, you have to be satisfied.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I am not satisfied?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then do not write the sentence. ⚠ A smaller ask you would refuse '
            + 'to accept is a tactic, and a reader finds that out at the moment '
            + 'it matters most.' }
  ]
});

PBE7.scene('u3-3-5-pair', {
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
      en: 'I am not asking you to change platers. I am asking for two '
            + 'quotations before the next order.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if I say yes, are you satisfied?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say that again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…If the two quotations come in higher, I am satisfied.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if they come in lower?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I would come back and ask you to change platers.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you are not satisfied. You are asking for the evidence to make '
            + 'the bigger ask.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not dishonest.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is not dishonest and it is not what you wrote. Write I am '
            + 'asking for two quotations, and if they are lower I will come back '
            + 'to you about the plater — and then you have said it, and he can '
            + 'say yes to the whole of it.' }
  ]
});

PBE7.scene('u3-3-6', {
  set: 'boardroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'There is a paragraph in this about a decision of yours. I want to '
            + 'read it to you before it goes.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Read it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The 2019 and 2021 Homs allocations were set on the standard '
            + 'seasonal figure and did not count walk-in trade, which is about '
            + 'half of what that shop sells in a season. Both allocations were '
            + 'approved by you on the same sheet, which has no line for walk-in '
            + 'trade on it.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Say approved again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Both allocations were approved by you.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I did not approve them. I set them. ⚠ Approved means somebody '
            + 'brought me a figure and I agreed to it. Nobody brought me '
            + 'anything. I wrote the number myself, in both years, in about four '
            + 'minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is worse for you, not better.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is true. And if your paper says approved, Mr Attar will read '
            + 'it and think there was a proposal, and will go looking for who '
            + 'made it, and there was nobody. ⚠ Then you have sent a man looking '
            + 'for a person who does not exist.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write set by you.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Write set by me, both years, in four minutes, on a sheet with no '
            + 'line for it. ⚠ And add the thing you do not know: the sheet is '
            + 'mine too. I drew it up in 1998 and nobody has changed it since.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I did not know that.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Nobody did. And it is the strongest thing in your paper and you '
            + 'would have sent it without it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why are you helping me?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Because you read it to me instead of sending it. ⚠ A man who '
            + 'hears a hard paragraph read to his face argues with the paragraph. '
            + 'A man who finds it in a file argues with the person.' }
  ]
});

PBE7.scene('u3-3-6-pair', {
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
      en: '(softening) There is, um, a paragraph here which, to some extent, '
            + 'touches on the allocations. The 2019 and 2021 figures… didn\'t, '
            + 'perhaps, fully account for walk-in trade, which is, of course, '
            + 'quite a significant proportion.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what you have written is that I have been getting the Homs '
            + 'allocation wrong for four years and nobody has told me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is not what it says.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is what I heard.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '(reads again, one speed) The 2019 and 2021 Homs allocations were '
            + 'set on the standard seasonal figure and did not count walk-in '
            + 'trade, which is about half of what that shop sells in a season.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is two years and one sheet. The first version was four years and me.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I added all of that with my voice.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'You added it with the pauses. Read it the way it is written and I '
            + 'will argue with the writing.' }
  ]
});

PBE7.scene('u3-3-7', {
  set: 'boardroom',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'I have read your paper twice and I disagree with it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ And I checked the sixty-one per cent, which took four minutes, '
            + 'and it is right.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You disagree with it and you checked it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Those are different activities and most papers only get one of '
            + 'them. ⚠ A paper I disagree with that has nothing checkable in it '
            + 'gets an argument. Yours had one figure and a page of working and a '
            + 'man telling me it took four minutes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What made you check instead of arguing?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Two things, and neither of them was the argument. ⚠ Paragraph 5 '
            + '— you wrote the case for accepting better than anybody has put it '
            + 'in this building, with the board price in it, which is the gain I '
            + 'would have raised and you raised it first. I had nothing to '
            + 'correct.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Paragraph 3. You told me where to stop reading. ⚠ Nobody has '
            + 'ever done that. A man who has been told where the weak point is '
            + 'reads the rest as something built.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the first version? You saw it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The first version would have got four pages of reply from me and '
            + 'nothing else. ⚠ Eleven points, and I would have answered all '
            + 'eleven, and nobody would have checked anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So where do you disagree?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ At forty per cent. I think the line is fifty, and I can say why, '
            + 'and we can argue about a number for twenty minutes instead of '
            + 'about a contract for a month.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is what the threshold was for.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ I know. It worked on me and I still think you are wrong about '
            + 'the number, and both of those things are fine.' }
  ]
});

PBE7.scene('u3-3-7-pair', {
  set: 'boardroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I disagree with this and there is nothing in it I can check.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'There are eleven points. Which one?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All of them, which is the problem. I will have to answer eleven '
            + 'things and none of them can be settled.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They are all true.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I believe you. Being true is not the same as being checkable. What '
            + 'would I have to do to find out whether you are right?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Read the whole file.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is a week. What is in point seven?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The concentration. Sixty-one per cent of turnover from one buyer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is that arithmetic?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then that is your paper, and the other ten points are an appendix.' }
  ]
});

PBE7.scene('u3-3-7-b', {
  set: 'boardroom',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'read', hold: 'book' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.71, 0.62],
      pose: 'hold', hold: 'slip' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'I read it twice. ⚠ I disagree with it and I checked it, and those '
            + 'are different activities.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Most papers only get one.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Most papers only get the argument. A paper I disagree with that '
            + 'has nothing checkable in it gets a reply, and a reply costs me an '
            + 'afternoon and the writer a week.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'What made you check?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Two things, and neither was the argument. ⚠ Paragraph 5 put the '
            + 'case for accepting better than anybody in this building has put '
            + 'it, with the board price in it — which is the gain I would have '
            + 'raised, and she raised it first. I had nothing to correct.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ She told me where to stop reading. If the sixty-one per cent is '
            + 'wrong, stop at paragraph 4. ⚠ Nobody has ever done that to me. I '
            + 'have seen it four times in twenty-two years and I read the whole '
            + 'paper every time.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the first version of the same paper?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Eleven points. It would have got four pages of reply from me and '
            + 'nothing else, and nobody would have checked anything. ⚠ It would '
            + 'have cost us a month.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So you agree with her?' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ No. She says forty per cent and I say fifty, and I can say why. '
            + '⚠ We will settle it in twenty minutes, which is what the threshold '
            + 'was for, and she knows it.' }
  ]
});
