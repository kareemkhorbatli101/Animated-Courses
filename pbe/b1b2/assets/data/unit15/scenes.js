/* Unit 15 — the acted dialogues. Every line is the book's own. */
PBE6.scene('u15-15-1', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Nine cartons went with the November code. I should have checked '
            + 'the stencils.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You were at the other site on the 9th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then Abu Yasser should have checked them.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Against what? He had a line that said the stencils should be on '
            + 'the bench, and they were.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…So the line should have said the stencils carry the code on the order.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now we are somewhere. ⚠ There are two kinds of should have and '
            + 'only one of them is useful. The first is I should have done the '
            + 'thing I was already supposed to do — which is an apology and '
            + 'changes nothing, because next month you will be at the other site '
            + 'again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ I should have written the line differently — which is a decision '
            + 'you took, with a reason, and it can be unmade. ⚠ The first kind '
            + 'blames a person for being in two places. The second kind fixes a '
            + 'page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I should have asked which code was on the stencils before I wrote '
            + 'the line, because I had never looked at that stencil set.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And would you have thought to?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. ⚠ I wrote how you will know for every line and I was pleased '
            + 'with it, and I checked whether things would be there. It did not '
            + 'occur to me to ask whether anything would be right.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then write that sentence down exactly as you have just said it, '
            + 'because it is worth more than nine cartons. ⚠ A control that tests '
            + 'presence is not a control — and you will find three more of them '
            + 'in that programme before Thursday.' }
  ]
});

PBE6.scene('u15-15-1-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The gate sheet was not signed on the day. I should have told Abu '
            + 'Yasser to sign daily.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have told him twice. He signs the page on a Thursday for the week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then he should have listened.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Against what? The sheet has one signature column for seven lines, '
            + 'so a weekly signature fits it perfectly.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…So I should have put a date column next to the signature column.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And would you have thought to?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'No. I looked at the sheet for four years and I saw a signature '
            + 'column, not a column with no date in it.' }
  ]
});

PBE6.scene('u15-15-2', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'If the stencils had carried the new code, the nine cartons would '
            + 'have gone out right.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'True, and it is a small counterfactual. Try a large one. The Homs store.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It opened in 2019 and closed in 2021.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And if somebody had counted the walk-in trade on that street for a '
            + 'week before the lease was signed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We would not have opened it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'How do you know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because somebody counted it afterwards, in 2020, and the number '
            + 'was about a third of what the plan assumed. ⚠ So we know what the '
            + 'week\'s counting would have shown, because the counting was '
            + 'eventually done.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which makes it one of the very few counterfactuals in this '
            + 'company that is actually known. Most of them are arguments.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the difference?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ A counterfactual is only worth writing when you know what the '
            + 'other road looked like. If we had counted, we would not have '
            + 'opened — we know, because the count exists. ⚠ If we had hired '
            + 'somebody else, the shop would have worked — we do not know, and '
            + 'writing it is a way of being angry on paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Mr Ayoub took the decision both times.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'He opened it and he closed it, and the closing took him about four '
            + 'months and the opening took him about four years to be willing to '
            + 'talk about. ⚠ Which is the second thing about a counterfactual: it '
            + 'is an accusation unless the person who took the decision writes '
            + 'it. The same sentence from him is a lesson. From you it is a '
            + 'complaint, however gently you put it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So who should write mine?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ You should, because you wrote the line. And that is the only '
            + 'reason the nine-carton counterfactual is useful: if the line had '
            + 'said against the order, Abu Yasser would have found it in four '
            + 'seconds — ⚠ and it is you who would have written those three '
            + 'words.' }
  ]
});

PBE6.scene('u15-15-2-pair', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'If we had kept the old supplier, the returns would not have risen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Do we know what the other road looked like?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The old cartons never gave us nine returns a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ The old cartons were never loaded from the north door, because '
            + 'the covered bay was open then. So we do not know how they would '
            + 'have behaved.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No. We do not.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then the honest version is a question and not a counterfactual: '
            + 'order one pallet of the old carton and load it from the north '
            + 'door. Two weeks, and then we know.' }
  ]
});

PBE6.scene('u15-15-3', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your counterfactual says if the line had read differently, the '
            + 'cartons would have gone out right. That is past and past.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Now write the one that is past and present. What do you still not have?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…A list of which objects carry the consignee code. Stencils, '
            + 'rubber stamps, the pre-printed labels, the template on the office '
            + 'machine.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If somebody had made that list when the code changed in November, '
            + 'we would have it now. ⚠ And it is January and we still do not have '
            + 'it, which means the next code change will do the same thing again.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is the sentence. ⚠ Past and past tells you what happened; '
            + 'past and present tells you what is still true — and only the '
            + 'second one makes anybody do anything today, because the first one '
            + 'is finished.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first one is more comfortable.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The first one is a story and the second one is an outstanding '
            + 'item. ⚠ A week of somebody\'s time in November would have produced '
            + 'a page that is still missing in January, and that is the shape of '
            + 'almost every real finding in this kind of work: ⚠ a small '
            + 'omission, a long time ago, that is still costing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Homs store is the same shape.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Say it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'If somebody had counted the walk-in trade for a week in 2019, we '
            + 'would have about two years of that rent in the business now.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ A week against two years. ⚠ And notice what you have done: you '
            + 'have put a figure on the omission by putting the consequence in '
            + 'the present. Past and past cannot do that, because in the past '
            + 'tense the consequence has an end date and the loss looks like '
            + '2021.' }
  ]
});

PBE6.scene('u15-15-3-pair', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'That is past and past. Now the one that is past and present. What '
            + 'do you still not have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The two years of rent.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say it as one sentence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'If somebody had counted the walk-in trade for a week in 2019, we '
            + 'would have about two years of that rent in the business now.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And what is the figure in the present half?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two years of rent on a shop on a main street.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ A week against two years — and Mr Ayoub took the decision, so it '
            + 'is his sentence to write and not yours.' }
  ]
});

PBE6.scene('u15-15-4', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Tannous — I am telephoning about the nine cartons. We are very '
            + 'sorry for the inconvenience caused.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thank you. May I tell you what that sentence does not tell me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Please.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'It does not tell me what happened, it does not tell me whether it '
            + 'will happen on the next order, and it does not tell me what to say '
            + 'to my own customer, who is the person actually waiting.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The stencils at our second store carried a consignee code we '
            + 'stopped using in November. Nine cartons were marked from that set '
            + 'before anybody noticed.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Thank you. That I can use. Who noticed?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Your agent, at the port.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: '⚠ So nobody at your end noticed at all, which is worse and is also '
            + 'the useful fact. And the next order?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The line on our programme asked whether the stencils were on the '
            + 'bench. It now asks whether they carry the code on the order, and '
            + 'the order goes on the bench beside them. ⚠ And we are making a '
            + 'list of every object in the company that carries that code, which '
            + 'we should have had in November.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Now I have a letter I can forward. ⚠ That is what I need: not an '
            + 'apology to me, but a page I can send to the person who is cross '
            + 'with me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the two days?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'The two days are gone and nothing you say will bring them back. ⚠ '
            + 'Do not offer me a discount; offer me the sentence about the list. '
            + 'A discount tells me you want the matter closed. ⚠ The list tells '
            + 'me the next consignment is safe, and the next consignment is worth '
            + 'more to me than the discount.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'May I put that in writing today?' },
    { who: 'customer', cam: { shot: 'close' },
      en: '⚠ Put it in writing in forty words, because I am going to forward '
            + 'it, and a long letter reads like a company that is frightened.' }
  ]
});

PBE6.scene('u15-15-4-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What are you going to do about the price?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I will come to the invoice. ⚠ First, here is what happened and '
            + 'what has changed, because you will be asked.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am asking about the price.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nine of your twenty-four cartons were marked from a set carrying '
            + 'the code we withdrew in November. Your agent found it; nobody here '
            + 'did. The programme line now reads carry the code on the order, and '
            + 'the order goes on the bench beside the stencils.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…All right. And the invoice?' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ I will credit the re-marking charge, which is about 140,000, and '
            + 'I will not offer anything for the two days, because nothing I '
            + 'offer will give your customer those two days back.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That is fair.' }
  ]
});

PBE6.scene('u15-15-5', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I wish the code had not changed in November. I wish somebody had '
            + 'told me which stencil set was where. And I wish I had written the '
            + 'line properly.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Three wishes. Put them through one test: ⚠ was the thing you wish '
            + 'for in your power at the time?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The code changing — no. That was the freight agent\'s requirement, not ours.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So that one is not a wish, it is weather. What does a reader do with it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nothing. ⚠ It explains why the thing was difficult and it asks to '
            + 'be forgiven.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Second.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I wish somebody had told me which stencil set was where. …That is '
            + 'not true. Hala sent a note on 14 November and I initialled it.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'So that one is worse than weather. ⚠ It is a wish that is '
            + 'contradicted by a document with your initials on it — and the '
            + 'document is in a file that an auditor reads.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the third is mine.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'I wish I had written the line properly. ⚠ In your power, at the '
            + 'time, by you, and it would have taken three words. ⚠ That is a '
            + 'wish. The other two are an excuse and an error.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is it worth writing at all, though? It is the same thing as I should have.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Nearly, and there is one difference worth the trouble. ⚠ I should '
            + 'have is a judgement and I wish I had is a regret — and a regret '
            + 'belongs in a sentence to a person and not in a report. ⚠ Write I '
            + 'should have to Mr Ayoub and I wish I had to Ms Tannous, once, and '
            + 'then never again in the same letter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why never again?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Because a second wish in the same letter turns an apology into a '
            + 'performance, and the reader starts managing your feelings instead '
            + 'of reading your remedy. One wish, one sentence, then the facts.' }
  ]
});

PBE6.scene('u15-15-5-pair', {
  set: 'incidentroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I wish we had a list of all these things.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So do I. Who is making it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I wish we had the time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ That is the second wish and it has arrived where a remedy should '
            + 'be. The list is two hours. Who, and by when?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Lina, by the 24th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that instead. I am having the list made; Lina, by the 24th.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Which is the same information with a name and a date in it, and '
            + 'it has stopped being a wish.' }
  ]
});

PBE6.scene('u15-15-6', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'Read me the five headings.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What happened. What it cost. Why. What changes. Who owns each change.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And which of the five is missing from every post-mortem I have '
            + 'ever been given?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The fifth.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The fifth, with a date on it. ⚠ A report with four parts is a good '
            + 'read and nothing happens. I have a drawer of them. Each one '
            + 'explains an event beautifully and not one of them has a line that '
            + 'says Bassel, by the 24th.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mine has four changes and I have put my own name against three of them.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Show me the fourth.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A list of every object carrying the consignee code — and I have '
            + 'put Lina against it, by the 24th, because it is two hours and she '
            + 'will do it properly and she does not know enough to leave anything '
            + 'off.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That last reason is the best sentence in your report and you '
            + 'have put it in brackets. A person who does not know what matters ⚠ '
            + 'cannot skip the thing that matters, which is why a new person is '
            + 'the right one for an inventory.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the cost section. I have written the two days and the agent\'s '
            + 're-marking charge.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And our own cost?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…About four hours of my time and three of Abu Yasser\'s, and a '
            + 'telephone call I will remember for a while.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Put the four hours in and leave the telephone call out. The '
            + 'hours are a figure somebody can weigh against two hours in '
            + 'November. The feeling is yours and it does not belong in a '
            + 'document that will be read in 2029.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long should it be?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ One page, and the fifth part is a third of it. If the why '
            + 'section is longer than the who owns it section, you have written '
            + 'an essay about yourself.' }
  ]
});

PBE6.scene('u15-15-6-pair', {
  set: 'incidentroom',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Read me the five headings.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What happened. What it cost. Why. What changes. Who owns each change.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And which is missing from yours?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…The fifth.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'With a date on it. Who owns the list of objects carrying the code?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Lina, by the 24th, because it is two hours and she does not know '
            + 'enough to leave anything off.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ And that reason is the best line in your report. Is your why '
            + 'section longer than your fifth part?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Twice as long.' }
  ]
});

PBE6.scene('u15-15-7', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'I have read the post-mortem. Four changes, all with my name or '
            + 'yours and a date. May I ask what is not in it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everything that is in it is in it.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then let me ask it differently. If the same thing started to '
            + 'happen next week, what would you do differently that is not one of '
            + 'the four changes?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…I would telephone Ms Tannous on the 13th and not on the 15th.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'The 13th is when her agent found it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The 13th is when I knew. Her agent telephoned our office at about '
            + 'four and I had the message by five, and I spent the 14th finding '
            + 'out exactly what had happened before I telephoned her. ⚠ So she '
            + 'spent a day and a half knowing something was wrong and not knowing '
            + 'what, and in that day and a half she had to tell her own customer '
            + 'something, and she had nothing to tell him.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Why is that not a change in the report?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Because I could not think how to write it as a line. Telephone '
            + 'sooner is not a change; it is an instruction to be better. ⚠ And I '
            + 'did not want to write I delayed a day to look competent, which is '
            + 'the true version.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Is it the true version?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is. I wanted to telephone her with the whole answer rather '
            + 'than with the question, ⚠ and the whole answer was worth less to '
            + 'her than a day and a half of knowing.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then the change is a rule about when, not about being better. '
            + 'Telephone the customer the same day I know, even with nothing to '
            + 'tell them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Which is writable, has a test in it, and would have taken four '
            + 'minutes on the 13th. ⚠ And I have been in this job four years and '
            + 'you have been in it three weeks, and you have just written the '
            + 'fifth change — because the four in the report are all about '
            + 'stencils and codes, and the one that cost her most is about me.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Shall I put it in?' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Put it in, with my name against it, and put your initials next '
            + 'to it as the person who found it. A post-mortem that hides who '
            + 'found the finding teaches nobody to look.' }
  ]
});

PBE6.scene('u15-15-7-pair', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'What is not in the report?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing. It is all there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If it started again next week, what would you do differently?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I would put the telephone number on the note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ That is change (a). Something that is not one of the three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I would have turned round and come back rather than guessing, and '
            + 'lost two hours instead of a day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Why is that not in the report?' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ Because it sounds like I should have been more sensible. ⚠ But '
            + 'as a rule it is writable: if an address is ambiguous and nobody '
            + 'answers, return; do not choose.' }
  ]
});

PBE6.scene('u15-15-7-b', {
  set: 'incidentroom',
  arr: 0,
  cast: {
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'lina', cam: { shot: 'wide' },
      en: 'If the same thing started next week, what would you do differently '
            + 'that is not one of the four changes?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would telephone Ms Tannous on the 13th and not on the 15th. Her '
            + 'agent telephoned our office at about four on the 13th and I had '
            + 'the message by five.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'And why did you wait?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I spent the 14th finding out exactly what had happened. I wanted '
            + 'to telephone her with the whole answer rather than with the '
            + 'question, and the whole answer was worth less to her than a day '
            + 'and a half of knowing.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Then the change is: telephone the customer the same day I know, '
            + 'even with nothing to tell them.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Put it in with my name against it, and put your initials next to '
            + 'it as the person who found it.' }
  ]
});
