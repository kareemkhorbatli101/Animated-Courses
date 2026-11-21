/* Unit 5 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u5-5-1', {
  set: 'workbench',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Walk me through an order. From the telephone to the invoice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala takes it at the counter, then she types the picking list, '
            + 'then Abu Yasser—' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Stop. Take the names out and tell me again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why? You will meet all three of them this week.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'I will, and in April one of them will be somewhere else and the '
            + 'procedure will still have to work. Names tell me who is doing it '
            + 'today. Steps tell me what the company requires.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The order is taken at the counter. A picking list is typed from '
            + 'it. The goods are picked against the list. The load is counted '
            + 'against the order at the gate, not against the list. The gate '
            + 'sheet is signed, by name, by whoever counted. The invoice is '
            + 'raised from the order.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Six steps. Now say the last one again.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The invoice is raised from the order.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Not from the gate sheet?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…From the order. Which means that if the gate count found a '
            + 'difference, the invoice does not know about it.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is the first thing you have told me that you did not know '
            + 'when you started talking. Six steps took four minutes and found '
            + 'one gap, and I have not opened a file yet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is that what you do all week?' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Mostly. I ask people to describe what they do without using '
            + 'anybody\'s name, and about a third of the time they find the gap '
            + 'themselves while they are talking. ⚠ The names are what hide it: '
            + 'as long as Abu Yasser is in the sentence, the sentence feels '
            + 'reliable, because he is.' }
  ]
});

PBE5.scene('u5-5-1-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Walk me through a payment in. From the counter to the ledger.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Hala takes the cash, then she writes the day book, then Nadia—' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. Take the names out and tell me again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The cash is taken at the counter. The day book is written from the '
            + 'till roll. The bag is counted against the day book. The paying-in '
            + 'slip is written from the bag. The ledger is written from the '
            + 'paying-in book.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now say the last step again. The ledger is written from what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…From the paying-in book. Which means that if a payment was taken '
            + 'and not banked, the ledger does not know about it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is the first thing you have told me that you did not know '
            + 'when you started.' }
  ]
});

PBE5.scene('u5-5-2', {
  set: 'workbench',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'The gate count against the order. When was it introduced and what '
            + 'prompted it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'September 2024. Two consignments had been signed for that were not '
            + 'ours — the haulier had changed drivers twice that summer.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Good. Did either of them cost money?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Neither. Both were returned within a week.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Better. Write that down, because it is the strongest thing on your page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That nothing happened?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That a control was introduced when nothing had yet gone wrong '
            + 'enough to force it. Most of the controls I see were introduced '
            + 'after a loss, which tells me a company reacts. Yours was '
            + 'introduced after a near miss, which tells me something different '
            + 'and rarer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if a control has no date?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then I cannot tell whether it is a decision or a habit, and I have '
            + 'to test it rather than take it. An undated control costs me an '
            + 'afternoon and costs you my afternoon. ⚠ Dates are not bureaucracy; '
            + 'they are the difference between my believing you and my checking '
            + 'you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The fourteen-day price was introduced in April and I do not know '
            + 'what prompted it.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Then find out before Thursday and tell me, and if nobody '
            + 'remembers, tell me that instead. Nobody can now say what prompted '
            + 'this is an answer I can work with. ⚠ It has always been done this '
            + 'way is not, and it is the sentence I hear most.' }
  ]
});

PBE5.scene('u5-5-2-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The two-signature rule on anything over 500,000. When was it '
            + 'introduced and what prompted it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It has always been done that way.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is not an answer I can work with. Try again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody can now say. Abu Yasser thinks it was Mr Ayoub\'s father '
            + 'and that the figure was once 50,000.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is an answer, and a better one than you think. What does it tell me?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That the figure has not been reviewed since the currency changed.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the control is obeyed and cannot be justified, which is more '
            + 'dangerous than no control at all.' }
  ]
});

PBE5.scene('u5-5-3', {
  set: 'workbench',
  arr: 2,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Step five. "The difference is recorded by the gate sheet."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Is it? A gate sheet cannot record anything. It is a piece of paper.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is recorded on the gate sheet. By whoever counted.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then that is two different facts and your sentence had neither. By '
            + 'is the person; with or on or against is the thing. Recorded by the '
            + 'person who counted, on the gate sheet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does it matter? Everybody knows what it means.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Everybody here knows. Look at what the sentence as written '
            + 'requires: nothing. There is no person in it, so there is nobody '
            + 'who has failed if it is not done. ⚠ A procedure is a list of '
            + 'things somebody has to do, and by is the word that says who.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And with?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Tells me what they do it with, and that matters more often than '
            + 'people think. Counted by hand and counted with a scanner are two '
            + 'different controls with two different failure modes. A scanner '
            + 'does not mis-add and a hand does not scan the same pallet twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours is all by hand.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'Then write by hand and let me decide what I think about it, rather '
            + 'than leaving me to assume a system you do not have.' }
  ]
});

PBE5.scene('u5-5-3-pair', {
  set: 'workbench',
  arr: 2,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Step four. "The stock is updated by the system."' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is it? A system cannot update anything. It is a machine with nobody at it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is updated on the system. By whoever is entering. From the count sheets.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By hand. One line at a time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is four facts and your sentence had none of them. ⚠ By '
            + 'is the person; on is the machine.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Does it matter? Everybody knows what it means.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Look at what the sentence requires: nothing. There is no person in '
            + 'it, so nobody has failed when the stock is three weeks behind.' }
  ]
});

PBE5.scene('u5-5-4', {
  set: 'workbench',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Six steps. Which of them have to be in that order?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'All of them, surely.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Try it. Could the picking list be typed before the order is written down?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. It is typed from the order.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So steps one and two are fixed. Could the invoice be raised before '
            + 'the goods are picked?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It could. It would be unusual and nothing would break.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'So step six is not fixed. Keep going — and you will find that two '
            + 'of your six are genuinely fixed and the rest are habit, which is '
            + 'not a criticism.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does it matter which?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Because a procedure where every step is marked as essential is a '
            + 'procedure that gets abandoned the first busy Thursday. Nobody can '
            + 'follow six rigid steps under pressure, so they follow none. Mark '
            + 'two and people keep two.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the two are?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The count against the order before the signature, and the '
            + 'difference seen before the release. Those are the two where doing '
            + 'it out of order destroys the control. Write them as must not … '
            + 'until, and write the other four as plain steps.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That feels like giving permission to be sloppy about four of them.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'It is giving permission to be flexible about four, so that the two '
            + 'survive. ⚠ A control that cannot bend anywhere breaks everywhere.' }
  ]
});

PBE5.scene('u5-5-4-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Six steps. Which have to be in that order?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them, surely.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Try it. Could the bag be counted before the day book is written?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It could. People do it when it is busy.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So that one is not fixed. Could the ledger be written before the '
            + 'bank stamps the slip?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. Then we would be recording money we had not banked.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So that one is. Keep going — and you will find two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two out of six. That feels like permission to be sloppy about four.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is permission to be flexible about four, so that the two '
            + 'survive. ⚠ A control that cannot bend anywhere breaks everywhere.' }
  ]
});

PBE5.scene('u5-5-5', {
  set: 'workbench',
  arr: 1,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Two sentences from your file. The stock is counted quarterly. The '
            + 'customer was not informed of the price change. One of those is a '
            + 'procedure and one is an incident. Which is which?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first is a procedure.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And the second?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second is… what happened.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The second is a thing somebody did not do, written so that nobody '
            + 'did not do it. Here is the test: who would have failed, if it had '
            + 'not been done? For the stock count — anybody; it is the company\'s '
            + 'job and the passive is right. For the customer?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whoever priced the order. Which was Hala.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then the sentence has a person in it and you have taken them out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is still true as written.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Every word of it. That is the problem — it is the only kind of '
            + 'dishonesty that survives an audit, because there is nothing in it '
            + 'to find. ⚠ An error was made is true, grammatical, and worth '
            + 'nothing to anybody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So in the incident file I write Hala.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'In the incident file you write what happened and who, with the '
            + 'reason, as you did in Unit 3. In the procedure file you write the '
            + 'customer is informed of any price change before the order is '
            + 'confirmed, by whoever prices it, which has nobody\'s name in it '
            + 'and requires somebody. ⚠ Two files, two jobs. The sin is using the '
            + 'procedure voice to write an incident.' }
  ]
});

PBE5.scene('u5-5-5-pair', {
  set: 'workbench',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'The notice says all spillages must be cleaned up immediately. Who '
            + 'would have failed, if it had not been done?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Whoever saw it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is anybody required to look?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is anybody on duty after six?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. And that is when they happen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the notice requires nobody, and it has been on the wall for six '
            + 'years being obeyed by nobody and broken by nobody.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is still true.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Every word of it. ⚠ That is the problem.' }
  ]
});

PBE5.scene('u5-5-6', {
  set: 'workbench',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'What has been changed since last year. Five things.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Read them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The price list has been reduced to one copy, printed on Fridays. '
            + 'The picking list has been changed to carry the order number and '
            + 'the time. Nine procedures have been written. The gate sheet has '
            + 'been given a date box. And the goods-out procedure has been '
            + 'rewritten twice.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Now sort them into two lists. Things that have been changed, and '
            + 'things that have been written down.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The price list and the picking list have been changed. The '
            + 'procedures have been written down.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'And the nine procedures — had any of them been done differently '
            + 'before they were written?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. They describe what we were already doing.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then nothing has changed about the work, and that is not a '
            + 'criticism — writing down what you already do is most of what a '
            + 'company like yours needs. But do not put it in the same list as a '
            + 'change, because it is not one, and I will find that out in an '
            + 'hour.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the goods-out procedure, rewritten twice?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'What changed about what people do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second rewrite added who by and against what. Nothing about '
            + 'what happens.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'So that is a writing-down too. ⚠ Out of five items you have two '
            + 'changes and three documents, and the honest version of your page '
            + 'says so. A company that cannot tell those apart does not know what '
            + 'it has actually altered, and neither will I.' }
  ]
});

PBE5.scene('u5-5-6-pair', {
  set: 'workbench',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'What has been changed since last year. Six things.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three procedures have been written. A form has been reprinted. A '
            + 'notice has been laminated. And the till has been reconciled daily '
            + 'instead of weekly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now sort them: changed, or written down?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The till is a change. The rest are documents.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the laminated notice — was anything done differently once it '
            + 'was laminated?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. It is the same notice in plastic.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Then out of six items you have one change and five documents, '
            + 'and the one change is the till.' }
  ]
});

PBE5.scene('u5-5-7', {
  set: 'workbench',
  arr: 0,
  cast: {
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'abu_yasser', cam: { shot: 'wide' },
      en: 'Version five. Six steps and two of them in bold. What do I '
            + 'actually have to do?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Of the six, two are yours, and both of the bold ones are yours. '
            + 'Ignore steps one, two and six — they happen in the office.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'So: pick against the list, count against the order, sign by name, '
            + 'and do not let it go until you have seen a difference.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the whole of your part, in one sentence, and it is better '
            + 'than the page.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And when I cannot? Thursday, two lorries, one of me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then you stop the load. It says so.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It says if you cannot do both marked steps, stop the load. It does '
            + 'not say who I tell.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…It does not.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'And a load standing in the yard with nobody told is worse than a '
            + 'load gone out, because at least the gone one is somebody\'s '
            + 'problem. I stop it, the driver waits, and nobody in the office '
            + 'knows there is a lorry in the yard at four o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is version six, and it is one clause: stop the load and '
            + 'tell the coordinator, or whoever is on the counter if the '
            + 'coordinator is not here.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is the clause. ⚠ And the reason it is missing is that whoever '
            + 'wrote the page has never had to stop a load.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I wrote the page.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'I know.' }
  ]
});

PBE5.scene('u5-5-7-pair', {
  set: 'workbench',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.74, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The bag goes to the bank daily. That is the procedure.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'On Saturdays I am on my own. I cannot leave the counter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then… you go at closing.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The bank shuts at one. I close at six.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So Saturday\'s cash stays here.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It does, every Saturday, and the page does not say so. It does not '
            + 'say where it is kept, who knows it is here, or what I write.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is three clauses and it is version two: cash taken on a '
            + 'Saturday is held in the safe, recorded on the day book as held, '
            + 'and banked on Monday with Monday\'s, and the coordinator is told '
            + 'by telephone before closing.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody has asked me about Saturday in four years.' }
  ]
});

PBE5.scene('u5-5-7-b', {
  set: 'workbench',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.18, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The order is taken at the counter and written on a numbered form. '
            + 'A picking list is typed from the order, by whoever took it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The goods are picked against the picking list. At the gate the '
            + 'load is counted against the order — not against the picking list — '
            + 'and the gate sheet is signed, by name, by whoever counted it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Any difference is written on the gate sheet and the load is not '
            + 'released until it has been seen by the coordinator.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The invoice is raised from the order by accounts. That is six '
            + 'steps, and the known gap is at the last one: a difference found at '
            + 'the gate is not carried across to the invoice by anything, and '
            + 'nothing in the procedure says who should carry it.' }
  ]
});
