/* Unit 2 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u2-2-1', {
  set: 'canteen',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The Jaber lorry came and the driver would not wait and now there '
            + 'is half a pallet on the floor of the yard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Stop there. I am going to have to write this down for Mr Ayoub, '
            + 'and if I write it in that order he will think somebody was '
            + 'careless. Start before it started. What was happening at seven?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'We were counting the Homs order. It had come in on Thursday and '
            + 'nobody had touched it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good. Who is "we"?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Abu Yasser and me. And two of the men were on the roof, because '
            + 'the gutter had come down in the rain and Mr Ayoub wanted it up '
            + 'before the next lot.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So at seven o\'clock, four people were in the yard and two of them '
            + 'were twelve feet up a ladder.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Yes. And it was raining again, lightly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the story. Now the lorry.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'The lorry came at ten past. He was early — he was booked for eleven.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And nobody could leave the count or the ladder.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Nobody could leave the ladder. You do not come down a ladder '
            + 'quickly in the rain.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is what I am writing, and it is a completely different '
            + 'note from the one I would have written four minutes ago. Half a '
            + 'pallet on the floor with four men standing about is carelessness. '
            + 'Half a pallet on the floor with two men up a ladder in the rain '
            + 'and a lorry fifty minutes early is a booking problem.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'It is the same half a pallet.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'It is the same half a pallet and it is not the same report.' }
  ]
});

PBE5.scene('u2-2-1-pair', {
  set: 'canteen',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We lost the whole afternoon and now the count is half entered and '
            + 'nobody knows which half.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop there. I am going to have to write this down, and in that '
            + 'order it reads as a mess we made. Start before it started. What '
            + 'was happening at two?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We were entering the stock count. It was the first of the month, '
            + 'so the counter was busy.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. Who is "we"?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Me, on the system. And Hala was on the counter on her own, because '
            + 'Nadia had gone to the clinic — her boy.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So at two o\'clock two people were in the building, one of them on '
            + 'a till that would not stop.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. And I am the only one who knows the stock screen.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'That is the story. Now the system.' }
  ]
});

PBE5.scene('u2-2-2', {
  set: 'canteen',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'So I went to Homs on the Tuesday, and I saw the two shops in the '
            + 'morning, and then I went to the third one, and the man there was '
            + 'not in, so I waited, and then he came at two, and we talked for an '
            + 'hour, and then I drove back, and the road was closed at Qara so I '
            + 'went round, and I got in at nine.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And what came of it?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The third one wants to order.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'That is the end of your story and it arrived after the road '
            + 'closure. Tell it again in four sentences.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I saw three shops in Homs on Tuesday. Two will reorder in the '
            + 'spring. The third wants to open an account now — forty boxes a '
            + 'month.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Three sentences, and I have the thing I needed. What happened to '
            + 'the road at Qara?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'It cost me two hours.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then it belongs in the story — but at the end, as a cost, and not '
            + 'in the middle as an event. It cost me two hours on the road and I '
            + 'would rather see three shops in a day than four.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The long version is what actually happened.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Everything that actually happened is in the long version, which is '
            + 'why nobody can use it. A sequence has to stop at the thing it was '
            + 'for. Everything after that is travel.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if the travelling is the point? If the road is closed every week?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Then the road is the story and the shops are the travel, and you '
            + 'tell it the other way round. But you have to decide which it is '
            + 'before you open your mouth, and that is the whole of this.' }
  ]
});

PBE5.scene('u2-2-2-pair', {
  set: 'canteen',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So I went to the bank, and I queued for half an hour, and then the '
            + 'girl said I needed the other branch, so I went to Mezzeh 86, and '
            + 'then they said no, it is this branch, and I came back, and I '
            + 'queued again.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what came of it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The account can be opened. They need the lease.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the end of your story and it arrived last. Tell it again '
            + 'in four sentences.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The second account can be opened at our own branch. They need a '
            + 'copy of the lease. Nobody had mentioned the lease. The appointment '
            + 'is Tuesday at ten.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the two queues?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It cost me a morning.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it belongs at the end, as a cost — and it is the sentence '
            + 'that gets somebody to telephone ahead next time.' }
  ]
});

PBE5.scene('u2-2-3', {
  set: 'canteen',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'I was at the bank for an hour and a half and when I came back '
            + 'everything had changed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tell me in two halves. What were you doing, and what happened?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'While I was queueing at the bank, a customer paid eight hundred '
            + 'thousand in cash at the counter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eight hundred. Who took it?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Hala took it, correctly, and wrote it in the day book. The trouble '
            + 'is that while she was writing it in the day book, the system went '
            + 'down, so it is in the book and not in the system.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So two things were running and one interrupted the other.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Three, really. While the system was down, two more customers paid, '
            + 'and those are on a pad.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Say that last part again with when.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'When the system came back, we had three payments on paper and '
            + 'nothing in the ledger.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And that is the difference. While is for the long thing — the '
            + 'queue, the writing, the system being down. When is for the moment '
            + 'something changed: when it came back, when you returned.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And if I say when I was queueing?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'You can, and it sounds like the queue was a point in time rather '
            + 'than an hour and a half, which is not the story you are telling. '
            + 'The hour and a half is the story: it is why there are three '
            + 'payments on a pad.' }
  ]
});

PBE5.scene('u2-2-3-pair', {
  set: 'canteen',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I was with the engineer at the machine for an hour and when I came '
            + 'out everything had gone wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tell me in two halves. What were you doing, and what happened?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'While we were working on the limit switch, the power went.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the generator?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'While we were waiting for it, it did not start. That is the whole '
            + 'thing — it has never not started before.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So two things were running and one interrupted the other.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three. While the generator was being bled, a delivery arrived and '
            + 'there was nobody at the gate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say the last part with when.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'When the engineer finally packed up, the delivery had been '
            + 'standing at the gate for twenty minutes. By then the driver had '
            + 'telephoned his own office.' }
  ]
});

PBE5.scene('u2-2-4', {
  set: 'canteen',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The gate sheet. The auditor is going to ask me when it started and '
            + 'why, and I do not know either answer.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'It started the summer the three pallets went to Jaramana.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Tell me what you used to do before that.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'We used to sign the driver\'s note at the gate. He would hand it '
            + 'over, I would sign it, he would go. Nobody counted anything, '
            + 'because the pallets were wrapped and you cannot count through '
            + 'wrap.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And that worked, for how long?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Years. It worked because it was always the same driver and he '
            + 'always had the right pallets. When the driver changed we went on '
            + 'signing, and twice in one month we signed for pallets that were '
            + 'not ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the practice was fine and the circumstances moved.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'The practice was fine until it was not. That is how it always goes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Now nothing is signed until it is counted against the order, and '
            + 'my name goes on it. It costs me twenty minutes a lorry and it has '
            + 'found three errors this year.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twenty minutes a lorry. Did anybody ever tell you that was an '
            + 'acceptable cost?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nobody ever asked. I decided it was.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then I am going to write that down, with the date of the Jaramana '
            + 'pallets, because a practice with a date on it is a decision and a '
            + 'practice with no date on it is a habit. The auditor can argue with '
            + 'a decision. He cannot do anything with a habit except ask why.' }
  ]
});

PBE5.scene('u2-2-4-pair', {
  set: 'canteen',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The fourteen-day price. The auditor is going to ask when it started.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It started the year the price of imported wrap moved twice before March.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Tell me what you used to do before that.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We used to print a list in January and hold it all year. Customers '
            + 'would telephone, we would read the price off the list, and that '
            + 'was the price until the following January.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And that worked, for how long?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Years. It worked because the list was true for a year. When prices '
            + 'started moving twice a year we went on reading from it, and we '
            + 'sold about two months at a loss before anybody noticed.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the practice was fine and the circumstances moved.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The practice was fine until it was not. Now a price is held '
            + 'fourteen days in writing. It costs us a re-quote and some '
            + 'customers do not like it.' }
  ]
});

PBE5.scene('u2-2-5', {
  set: 'canteen',
  arr: 1,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'The Haffar order went out on Thursday and it was two boxes short.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why did you not telephone me?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '…I did not know until Friday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Sorry. That came out as an accusation and it stopped you. Start '
            + 'again — the order went out two short.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Two short. I found out on the Friday when he telephoned.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mm. And then what?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And then I looked at the gate sheet and the gate sheet says '
            + 'twelve, and the order says fourteen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So you mean the gate sheet was right and the order was not filled.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is what I mean, yes. And — this is the thing — the picking '
            + 'list in the warehouse says twelve as well.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ah.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Which means it was never picked as fourteen, so it was not lost in '
            + 'the yard. It was wrong before it got there.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where does a picking list come from?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'From me. From the order. So it is mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Possibly. Would you rather I had asked you that at the start?' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'No. At the start I would have said I did not know.' }
  ]
});

PBE5.scene('u2-2-5-pair', {
  set: 'canteen',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The proof never came and we have lost a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Mm. And then what?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And then I telephoned them on the Thursday and they said they had '
            + 'sent it on the Friday before.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you mean it was sent and did not arrive.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is what I mean. And — this is the thing — he read the address '
            + 'back to me and it has an l in it that should not be there.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ah.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which means it bounced somewhere and nobody saw it, because the '
            + 'bounce went to their outbox, not ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And where did they get the address from?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'From the order I typed.' }
  ]
});

PBE5.scene('u2-2-6', {
  set: 'canteen',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'So the order said fourteen, the picking list said twelve, and the '
            + 'gate check could not catch it because the gate checks against the '
            + 'picking list. We must all be more careful with picking lists.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'No.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'The story is good and the last sentence is wallpaper. Nobody has '
            + 'ever been more careful because they were told to be. What changes '
            + 'on Monday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The gate check could go against the order instead of the picking list.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now that is a point. What does it cost?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Abu Yasser has to have the order at the gate, which means it is '
            + 'printed twice, and he has to read two documents instead of one. '
            + 'Five minutes a lorry, perhaps.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And what does it catch that we were not catching?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Exactly this. A picking list that is wrong before it leaves the office.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then tell the story that way round: here is what happened, here is '
            + 'the one thing it shows, here is what I propose, here is what it '
            + 'costs. Four sentences and I can say yes or no.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And we must all be more careful?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Is what people say when they have not worked out what to change. '
            + 'It is not dishonest; it is unfinished. If you genuinely cannot '
            + 'find a change, say that instead — I cannot see a change that would '
            + 'have caught this — and I will believe you, and we will leave it.' }
  ]
});

PBE5.scene('u2-2-6-pair', {
  set: 'canteen',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'So the lorry was hit by another lorry in the street, and the wrap '
            + 'went on the road, and we lost eleven boxes. We must all be more '
            + 'careful at that junction.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. What changes on Monday?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Nothing. Our man was parked legally and somebody drove into him.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then say that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I cannot see a change that would have caught this.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. That is a complete answer and I believe it. Write the first '
            + 'three sentences and that one, and we will leave it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It feels like giving up.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is the opposite. You have looked for a change and there is not '
            + 'one. If you invent a rule now, somebody will be obeying it in five '
            + 'years for no reason.' }
  ]
});

PBE5.scene('u2-2-7', {
  set: 'canteen',
  arr: 0,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'I told Mr Ayoub about the wrap. Half a pallet on the floor and '
            + 'four of them water-marked.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did he say?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'He said somebody should have been on the gate.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is not what Fadi told you. Fadi told you four men were '
            + 'in the yard and two were up a ladder in the rain, and the lorry '
            + 'was fifty minutes early.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I said it was a mess in the yard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is true and is the only part that is not the story. You '
            + 'passed on the damage and dropped the scene, so Mr Ayoub heard '
            + 'carelessness — and the man who gets that is Abu Yasser, who was '
            + 'counting, and Fadi, who could not come off a ladder.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I was not blaming anybody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You were not. You told it in the order it reached you, which is '
            + 'the order everything reaches everybody, and the scene is always '
            + 'the part that falls off — because it takes four clauses and the '
            + 'damage takes four words.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So what do I owe him?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whoever tells you something is owed the constraint. You can cut '
            + 'his adjectives, his weather and his opinion of the driver. You '
            + 'cannot cut the reason nobody did anything, because without it the '
            + 'account accuses him.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Shall I go back and say it again?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Yes, and in one sentence, which is all a second go ever gets: two '
            + 'of them were up a ladder in the rain and the lorry was fifty '
            + 'minutes early. He will take it; he has not decided anything yet.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And if he had decided?' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then we would be having a much longer conversation, and Fadi would be in it.' }
  ]
});

PBE5.scene('u2-2-7-pair', {
  set: 'canteen',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.67, 0.62],
      pose: 'greet' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I told Mr Ayoub the counter was shut for twenty minutes on Tuesday.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what did he say?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He said it must not happen again.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then he has heard that somebody wandered off. What had actually happened?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A skip lorry was across the gate and Hala went out to find the '
            + 'driver, because Fadi was on the Ghouta run and Abu Yasser was not '
            + 'in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And she put a note on the door.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'She did. I did not mention the note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the twenty minutes was her solving a blocked gate on her own, '
            + 'with a note on the door, and what he heard was an unmanned '
            + 'counter. What is your one sentence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '"She was out at the gate moving a skip lorry and she put a note on '
            + 'the door."' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Say it today. He has not decided anything yet.' }
  ]
});

PBE5.scene('u2-2-7-b', {
  set: 'canteen',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.21, 0.62],
      pose: 'read', hold: 'sheet' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'At seven we were counting in the Homs order — it had come on the '
            + 'Thursday and nobody had touched it because of the holiday.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'There were four of us in the yard. Abu Yasser and me on the count, '
            + 'and two of the men were up on the roof putting the gutter back, '
            + 'because it came down in the rain on Sunday.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'It was raining again, lightly. Nobody could come off that ladder '
            + 'quickly — you do not hurry a ladder in the rain.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'The Jaber lorry came at about ten past seven. It was booked for '
            + 'eleven. The driver said he had a drop in Adra and could not wait, '
            + 'so he put it down by the gate on the concrete.' },
    { who: 'fadi', cam: { shot: 'close' },
      en: 'Fourteen boxes of wrap went on wet ground. Four are water-marked. '
            + 'The other ten are sound and I have put them back on the bay.' }
  ]
});
