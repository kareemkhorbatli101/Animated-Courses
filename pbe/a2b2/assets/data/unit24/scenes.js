/* Unit 24 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u24-24-1', {
  set: 'newbranch',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'For the customers: "We will open the second store on 1 September."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Is it arranged? Is there a lease?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'There is a lease. It is signed. The shelves are ordered.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then we are going to open on 1 September — going to for something '
            + 'already decided and arranged. It is stronger than will, because it '
            + 'says the arrangements exist.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I thought will was stronger.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Will is for a decision made at the moment of speaking — I will '
            + 'telephone him now — and for a prediction. In a letter to customers '
            + 'it reads as an intention, which is weaker than a signed lease.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And the second part: "We will also open in Homs next year."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Is there a lease in Homs?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'No. We are thinking about it.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then that is not going to and it is not will either. That is we '
            + 'hope to, which is the next cycle, and putting it in the same '
            + 'sentence as the signed lease is how a company loses the right to '
            + 'be believed about either of them.' }
  ]
});

PBE4.scene('u24-24-1-pair', {
  set: 'newbranch',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the staff: "We will have a second machine running in August."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is it arranged? Is the machine paid for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is paid for. It ships on the 12th.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then we are going to have a second machine from August — the '
            + 'payment and the shipping date are the arrangement.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I thought will was stronger.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Will is for a decision made as you speak. And who is going to run '
            + 'it on the second shift?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody yet. I was going to ask.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the machine is going to and the second shift is we hope to, '
            + 'and they must not share a sentence.' }
  ]
});

PBE4.scene('u24-24-2', {
  set: 'newbranch',
  arr: 1,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'You say you hope to open in Homs. Does that mean yes or no?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It means we intend to and it is not arranged. What would have to '
            + 'happen first is a lease at a rent we can pay, and we have not '
            + 'found one.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Most companies would just say they are opening.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And then in May they are not opening, and you remember. We hope to '
            + 'costs me nothing today and saves me that conversation.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'So when will you know?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'By the end of March. If there is a lease by March we are going to '
            + 'open before the summer; if there is not, we are not going to try '
            + 'this year. I will write to you either way.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'That is more useful than the promise.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'A hope with a condition and a date on it is nearly as useful as a '
            + 'plan. A hope with nothing on it is just a nice feeling, and nobody '
            + 'can do anything with a nice feeling.' }
  ]
});

PBE4.scene('u24-24-2-pair', {
  set: 'newbranch',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'You say you hope to reduce prices. Does that mean yes or no?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It means we intend to and it is not arranged. What would have to '
            + 'happen first is the Latakia route reopening, and that is not ours '
            + 'to arrange.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Most companies would just say prices are coming down.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And then in September they are not, and you remember.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So when will you know?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'By the end of the quarter. If the route is open we are going to '
            + 'cut the wrap price by about ten per cent; if it is not, prices '
            + 'hold where they are. I will write to you either way.' }
  ]
});

PBE4.scene('u24-24-3', {
  set: 'newbranch',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'I would like to propose Saturday deliveries. All customers, every '
            + 'Saturday, from next month.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'That is a good idea and nobody will agree to it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Because it is a whole new day for everybody at once, and if it '
            + 'fails it fails in front of four hundred customers. Make the first '
            + 'step small. We would like to propose a trial run: Saturdays for '
            + 'the Mezzeh district only, for six weeks.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then step two, if the trial works: the whole city. Step three: a '
            + 'second driver. Three steps, and each one only happens if the one '
            + 'before it worked.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is slower.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'It is slower and it will actually happen, which is faster than a '
            + 'perfect plan that is refused. And one more thing: say how you '
            + 'would stop. If fewer than thirty orders come in six weeks, we stop '
            + 'and nothing is lost. A proposal that cannot be stopped is a '
            + 'proposal nobody dares to start.' }
  ]
});

PBE4.scene('u24-24-3-pair', {
  set: 'newbranch',
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
      en: 'I would like to propose a stock count. Everything, every Friday, '
            + 'from this week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a good idea and nobody will agree to it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why not?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because it is three hours of four people every week for ever, and '
            + 'if it finds nothing the first time everybody will resent it. Make '
            + 'the first step small: the twenty fastest lines, four Fridays.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then step two, if the four Fridays find real differences: the '
            + 'whole store room monthly. Step three: a written count sheet with a '
            + 'name on it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is slower.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is slower and it will actually happen. And say how you would '
            + 'stop: if the four Fridays find less than a hundred thousand of '
            + 'difference, we stop and say so.' }
  ]
});

PBE4.scene('u24-24-4', {
  set: 'newbranch',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'The plan for the store: first we sign the lease, then we paint, '
            + 'after that we fit the shelves, then we stock it, finally we open.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Five steps in the right order. Now tell me why painting comes '
            + 'before the shelves.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Because you cannot paint behind a fitted shelf.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then put that in. Without it, somebody who is in a hurry will fit '
            + 'the shelves first, and we will spend a Saturday taking them down '
            + 'again.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So: then we paint, because you cannot paint behind a fitted shelf.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Better. And what can be done at the same time as the painting?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The sign. The sign maker needs three weeks and the painting takes four days.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then the sign is not step six, it is at the same time, ordered the '
            + 'day we sign the lease. The order of a plan is not the order you '
            + 'thought of the steps in. Half the delay in any plan is a thing '
            + 'that could have been started on day one and was started on day '
            + 'forty.' }
  ]
});

PBE4.scene('u24-24-4-pair', {
  set: 'newbranch',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The plan: first advertise, then interview, after that choose, '
            + 'finally he starts.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Four steps in the right order. Now tell me why the paperwork is not in it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because it happens after we choose.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does, and it takes three weeks, and at the moment it is '
            + 'invisible — so he will be chosen in May and start in June and '
            + 'everybody will be surprised.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So: after that we choose, and at the same time we start the '
            + 'registration, because it takes three weeks.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better. And why does interviewing come before choosing?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Because — that one is obvious.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then leave it. A reason on every step does not mean a reason on '
            + 'the obvious ones; it means a reason wherever somebody in a hurry '
            + 'could reorder it.' }
  ]
});

PBE4.scene('u24-24-5', {
  set: 'newbranch',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The progress report. "There are still two things to do: the '
            + 'shelves and the stock."' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'True, and it is the wrong way round. What have you already done?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The lease is signed, the sign is ordered, the painting is finished.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then start there. We have already signed the lease, ordered the '
            + 'sign and finished the painting. Three of the five steps are done. '
            + 'Now the two that are left are the end of a sentence, not the whole '
            + 'report.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'It feels like boasting.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is a count, and a count is not boasting. The person reading it '
            + 'has to decide whether to worry. Three of five is an answer; "there '
            + 'are still two things to do" is a worry with no size on it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the painting is nearly finished, not finished.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Then it is not finished. Nearly is the most expensive word in a '
            + 'progress report — it is used for anything between one hour and '
            + 'three weeks of work. Say what is done and what is not, and put a '
            + 'date on the not.' }
  ]
});

PBE4.scene('u24-24-5-pair', {
  set: 'newbranch',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The progress report. "The trial is going well."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'True, and it is not a report. How many Saturdays have you run?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two of the six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how many orders?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nineteen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that. We have run two of the six Saturdays and taken '
            + 'nineteen orders. Nineteen in two is ahead of thirty in six, and '
            + '"going well" is not — it is a feeling, and a feeling cannot be '
            + 'compared with a target.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the review is nearly ready.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it is not ready. When is it ready?' }
  ]
});

PBE4.scene('u24-24-6', {
  set: 'newbranch',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The note for the staff. "Thank you all for your hard work this '
            + 'year. We look forward to next year."' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Who worked hard?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Everybody.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then it says nothing. Thanking everybody for everything is the '
            + 'same as thanking nobody for anything — and everybody in the room '
            + 'knows which three weeks were the hard ones. Name them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The three weeks in August when the generator failed and we worked '
            + 'mornings only.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is a thank-you. And what went wrong this year?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The Homs store. We opened it and closed it in two years.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Put it in. Everybody knows, and a note that leaves out the one '
            + 'thing everybody is thinking about is read as management not '
            + 'mentioning it. Say what we learned: we opened without counting the '
            + 'walk-in trade first, and we will not do that again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the end?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'One sentence about what is actually arranged for next year — not '
            + 'hopes, the arranged thing. Baghdad Street, on the eighth of June. '
            + 'People can go home with a date.' }
  ]
});

PBE4.scene('u24-24-6-pair', {
  set: 'newbranch',
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
      en: 'The note. "Thank you all for your efforts with the Saturday trial. '
            + 'We will consider it again in the future."' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who made the effort?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Everybody.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then it says nothing. Name the thing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fadi worked six Saturdays on top of a full week and never once said no.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is a thank-you. And what went wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nineteen orders in six weeks. We needed thirty.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Put the number in. Everybody knows it failed; the number is what '
            + 'stops it being whispered about. And say what we learned: we '
            + 'counted the customers who asked, not the ones who would pay, and '
            + 'next time we ask for a standing order before we buy a Saturday.' }
  ]
});

PBE4.scene('u24-24-7', {
  set: 'newbranch',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The year-end note. He says Homs went wrong and he says it was his '
            + 'decision. Is he telling us something is coming?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Read it in three parts. The first is thanks, for August, and '
            + 'it is specific enough that he must have meant it. The second is '
            + 'what went wrong — Homs, named and owned, and finished two years '
            + 'ago.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And the third?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The third is the only part about next year, and there is exactly '
            + 'one arranged thing in it: Baghdad Street, 8 June, with a signed '
            + 'lease, an ordered sign and an applied-for licence. That is what '
            + 'you can plan on.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There is nothing about drivers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There is nothing about drivers because nothing about drivers is '
            + 'arranged. If a second driver were arranged, that paragraph is '
            + 'where it would be — and he has promised to tell us which things '
            + 'are hopes as they happen, which is the sentence I would hold him '
            + 'to.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So a new store and no new driver means more Saturdays for me.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'It might. That is a question worth asking him in January, with the '
            + 'note in your hand — and asking it in January is a great deal '
            + 'better than waiting until June to find out.' }
  ]
});

PBE4.scene('u24-24-7-pair', {
  set: 'newbranch',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.66, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The trial note says nineteen orders and that they are stopping. '
            + 'Are we in trouble?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it in three parts. The thanks names the six Saturdays and '
            + 'names Fadi. The failure is a number — nineteen against thirty — '
            + 'and whose decision it was.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the third part?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The third part is the only one about next week, and it says the '
            + 'Tuesday and Thursday runs continue exactly as now. That is the '
            + 'arranged thing, and it is the answer to your question.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So nothing changes for me.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nothing in this note. And notice what is not in it: nothing about '
            + 'the van, which is eleven years old. If that were being replaced, '
            + 'this is where it would say so.' }
  ]
});

PBE4.scene('u24-24-7-b', {
  set: 'newbranch',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Progress on Baghdad Street, as at the twenty-eighth of May. Four '
            + 'of the six steps are done: the lease signed on the twelfth, the '
            + 'sign ordered on the twelfth, the licence applied for on the '
            + 'twelfth, and the painting finished on the twenty-fourth, on time.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two are not done yet. The shelves will be finished on the '
            + 'thirtieth, and the stock moves from Mezzeh between the first and '
            + 'the fifth of June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What has changed: the sign maker now says three and a half weeks '
            + 'rather than three, so the sign arrives on the sixth of June, two '
            + 'days before opening instead of four.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The one thing I am watching is the licence, which may come after '
            + 'the opening — we are allowed to open with it pending. Still the '
            + 'eighth of June. Nothing in this report moves the opening date.' }
  ]
});
